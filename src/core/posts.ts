import { getCollection } from "astro:content";

/**
 * 所有文章（原始数据）
 */
export async function getAllPosts() {
  return await getCollection("posts");
}

/**
 * 已发布文章（全站默认）
 */
export async function getPublishedPosts() {
  const posts = await getCollection("posts");

  return posts
    .filter(post => !post.data.draft)
    .sort((a, b) =>
      b.data.pubDate.getTime() - a.data.pubDate.getTime()
    );
}
export async function getAllSeries() {
  const posts = await getPublishedPosts();

  const seriesSet = new Set(
    posts
      .filter(p => p.data.series)
      .map(p => p.data.series)
  );

  return Array.from(seriesSet);
}
export async function getAllSeriesWithMeta() {
  const posts = await getPublishedPosts();

  const map = new Map();

  posts.forEach(post => {
    const key = post.data.series;
    if (!key) return;

    if (!map.has(key)) {
      map.set(key, {
        slug: key,
        name: post.data.seriesName || key,
        count: 0,
        posts: []
      });
    }

    const item = map.get(key);
    item.count++;
    item.posts.push(post);
  });

  return Array.from(map.values());
}
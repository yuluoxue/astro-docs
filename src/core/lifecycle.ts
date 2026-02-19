export type LifecycleStatus = "new" | "warn" | "expired" | null;

const DAY = 1000 * 60 * 60 * 24;

export function getPostStatus
(post: {
  pubDate: Date;
  timeless?: boolean;
  validDays?: number;
}): LifecycleStatus {

  const now = new Date();
  const diffDays = (now.getTime() - post.pubDate.getTime()) / DAY;

  // 7天内永远是新
  if (diffDays <= 7) return "new";

  // 永久有效文章
  if (post.timeless) return null;

  // 严格有效期
  if (post.validDays) {
    if (diffDays > post.validDays) return "expired";
    return null;
  }

  // 默认 normal 生命周期
  if (diffDays > 730) return "expired";
  if (diffDays > 365) return "warn";

  return null;
}

const searchInput = document.getElementById('searchInput');
const postsList = document.getElementById('postsList');
const posts = Array.from(postsList.querySelectorAll('.blog-post'));

searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase().trim();

  posts.forEach(post => {
    const title = post.dataset.title || '';
    const description = post.dataset.description || '';
    const tags = post.dataset.tags || '';

    // 检查 query 是否出现在 title / description / tags 中
    if (title.includes(query) || description.includes(query) || tags.includes(query)) {
      post.style.display = ''; // 显示
    } else {
      post.style.display = 'none'; // 隐藏
    }
  });
});

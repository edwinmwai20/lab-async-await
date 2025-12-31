// Write your code here!
document.addEventListener('DOMContentLoaded', async () => {
  const postList = document.getElementById('post-list');

  function displayPosts(posts) {
    postList.innerHTML = '';
    posts.forEach(post => {
      const li = document.createElement('li');
      const title = document.createElement('h1');
      const body = document.createElement('p');

      title.textContent = post.title;
      body.textContent = post.body;

      li.appendChild(title);
      li.appendChild(body);
      postList.appendChild(li);
    });
  }

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    displayPosts(posts);
  } catch (error) {
    postList.innerHTML = '<li>Failed to load posts.</li>';
    console.error(error);
  }
});

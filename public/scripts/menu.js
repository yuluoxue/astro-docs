document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector('.menu');
  const navLinks = document.querySelector('.nav-links');

  if (menu && navLinks) {
    menu.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }
});

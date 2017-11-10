window.onload = function() {
  const menuTitles = document.querySelectorAll('a.footer-menu-title');

  menuTitles.forEach(title => title.addEventListener('click', (event) => {
    event.preventDefault();
    title.parentElement.classList.toggle('is-active');
  }));
}

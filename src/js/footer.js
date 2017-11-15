window.onload = function() {
  const menuTitles = document.querySelectorAll('a.footer-menu-title');

  menuTitles.forEach(title => title.addEventListener('click', (event) => {
    const activeElement = document.querySelector('.footer-menu.is-active');
    if (activeElement) {
      activeElement.classList.remove('is-active');
    }
    event.preventDefault();
    title.parentElement.classList.toggle('is-active');
  }));
}

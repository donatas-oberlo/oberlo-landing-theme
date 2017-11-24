function initFooterMenu() {
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

function initStickySubscribe() {
  const stickyMenu = document.querySelector('.sticky-subscribe-banner');
  const closeBtn = stickyMenu.querySelector('.icon-close');
  const showThreshold = 300;
  window.addEventListener('scroll', () => {
    if (window.scrollY > showThreshold) {
      stickyMenu.style.display = 'block';
    } else {
      stickyMenu.style.display = 'none';
    }
  });
  closeBtn.addEventListener('click', (event) => {
    stickyMenu.style.display = 'none';
    event.preventDefault();
  });
}

function initFooter() {
  initFooterMenu();
  initStickySubscribe();
}

export default initFooter;

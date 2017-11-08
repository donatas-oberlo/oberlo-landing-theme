function initNavbarBurger() {
  const $navbarBurgers = document.querySelectorAll('.navbar-burger');

  if ($navbarBurgers.length > 0) {

    $navbarBurgers.forEach(($el) => {
      $el.addEventListener('click', () => {
        // Get the target from the "data-target" attribute
        const target = $el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }
}

function initNavbarDropdown() {
  const $navbarDropdown = document.querySelectorAll('.navbar-item.has-dropdown');

  if ($navbarDropdown.length > 0) {

    $navbarDropdown.forEach(($el) => {
      $el.addEventListener('click', () => {
        $el.classList.toggle('show-dropdown');
      });
    });
  }
}

function initShowAllArticles() {
  const $navbarDropdown = document.querySelector('#show-all-articles');
  const $allArticles = document.querySelector('#all-articles');

  if ($navbarDropdown && $allArticles) {
    $navbarDropdown.addEventListener('click', () => {
      $allArticles.classList.toggle('is-hidden-touch');
    });
  }
}

function initHeader() {
  initNavbarBurger();
  initNavbarDropdown();
  initShowAllArticles();
}

export default initHeader;

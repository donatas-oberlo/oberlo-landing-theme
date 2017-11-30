function initFooterMenu() {
  const menuTitles = document.querySelectorAll('a.footer-menu-title');
  const $activeElement = document.querySelector('.footer-menu.is-active');

  menuTitles.forEach($title => $title.addEventListener('click', (event) => {
    if ($activeElement) {
      $activeElement.classList.remove('is-active');
    }

    event.preventDefault();
    $title.parentElement.classList.toggle('is-active');
  }));
}

function initStickySubscribe() {
  const showThreshold = 300;
  const $stickyMenu = document.querySelector('.sticky-subscribe-banner');

  if ($stickyMenu) {
    const $closeBtn = $stickyMenu.querySelector('.icon-close');

    $closeBtn.addEventListener('click', (event) => {
      $stickyMenu.style.display = 'none';
      event.preventDefault();
    });

    window.addEventListener('scroll', () => {
      if (window.scrollY > showThreshold) {
        $stickyMenu.style.display = 'block';
      } else {
        $stickyMenu.style.display = 'none';
      }
    });
  }
}

function initModalCloseBtn($modal) {
  const $closeBtn = $modal.querySelector('.close-btn');

  if ($closeBtn) {
    $closeBtn.addEventListener('click', (event) => {
      $modal.style.display = 'none';
    });
  }
}

function initSocialShare() {
  const showThreshold = 300;
  const bottomThreshold = document.documentElement.scrollHeight - window.innerHeight + showThreshold;
  let $socialShare = null;
  window.addEventListener('scroll', function () {
    if ($socialShare) {
      if (window.scrollY > showThreshold && window.scrollY < bottomThreshold) {
        $socialShare.style.display = 'block';
      } else {
        $socialShare.style.display = 'none';
      }
    } else {
      $socialShare = document.getElementById('at4-share');
    }
  });
}

function initMobileSubscribe() {
  const $subscribeBtn = document.querySelector('.js-mobile-subscribe');
  const $subscribeModal = document.querySelector('.mobile-subscribe-modal');

  if ($subscribeBtn && $subscribeModal) {
    $subscribeBtn.addEventListener('click', (event) => {
      $subscribeModal.style.display = 'flex';
      initModalCloseBtn($subscribeModal);
      event.preventDefault();
    });
  }
}

function initFooter() {
  initFooterMenu();
  initStickySubscribe();
  initMobileSubscribe();
  initSocialShare();
}

export default initFooter;

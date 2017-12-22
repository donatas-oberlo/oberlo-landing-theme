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

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));

  const expires = `expires=${d.toUTCString()}`;
  document.cookie = `${cname}=${cvalue}; ${expires}; path=/`;
}

function getCookie(cname) {
  const name = `${cname}=`;
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i += 1) {
    let c = ca[i];

    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }

    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}

function initStickySubscribe() {
  const showThreshold = 300;
  const $stickyMenu = document.querySelector('.sticky-subscribe-banner');

  if ($stickyMenu && getCookie('sticky_subscribe_banner') === '') {
    const $closeBtn = $stickyMenu.querySelector('.icon-close');

    $closeBtn.addEventListener('click', (event) => {
      $stickyMenu.classList.remove('is-shown');
      $stickyMenu.classList.add('is-closed');
      setCookie('sticky_subscribe_banner', 1, 90);
      event.preventDefault();
    });

    window.addEventListener('scroll', () => {
      if (!$stickyMenu.classList.contains('is-closed')) {
        if (window.scrollY > showThreshold) {
          $stickyMenu.classList.add('is-shown');
        } else {
          $stickyMenu.classList.remove('is-shown');
        }
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
  if (!document.querySelector('.article-single')) {
    return;
  }
  const showThreshold = 300;
  const bottomThreshold = document.documentElement.scrollHeight - (window.innerHeight + showThreshold + 200);
  let $socialShare = null;
  let $mobileShare = null;
  window.addEventListener('scroll', function () {
    if ($socialShare) {
      if (window.scrollY > showThreshold && window.scrollY < bottomThreshold) {
        $socialShare.style.display = 'block';
      } else {
        $socialShare.style.display = 'none';
      }
    } else if ($mobileShare) {
      if (window.scrollY > showThreshold) {
        $mobileShare.style.display = 'block';
      } else {
        $mobileShare.style.display = 'none';
      }
    } else {
      $socialShare = document.getElementById('at4-share');
      $mobileShare = document.getElementById('.mobile-banner-social');
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

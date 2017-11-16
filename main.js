import initHeader from './src/js/header';
import initHeaderPromo from './src/js/header-promo';
import './src/js/footer';

import './src/sass/styles.sass';

/* On page load */
document.addEventListener('DOMContentLoaded', function () {
  initHeader();
  initHeaderPromo();
});

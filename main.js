import initHeader from './src/js/header';
import initSubscribeInput from './src/js/subscribe-input';
import initFooterMenu from './src/js/footer';


import './src/sass/styles.sass';

/* On page load */
document.addEventListener('DOMContentLoaded', function () {
  initHeader();
  initSubscribeInput();
  initFooterMenu();
});

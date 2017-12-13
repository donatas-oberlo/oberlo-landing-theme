import initHeader from './src/js/header';
import initSubscribeInput from './src/js/subscribe-input';
import initFooter from './src/js/footer';


import './src/sass/styles.sass';
import './docs/sass/docs.sass';

/* On page load */
document.addEventListener('DOMContentLoaded', function () {
  initHeader();
  // initSubscribeInput();
  initFooter();
});

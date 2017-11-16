function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(email);
}

function initInput() {
  const $input = document.querySelector('.field input');

  if ($input) {
    function validateField(ev = {}) {
      const isActive = $input === document.activeElement || $input.value !== '' || ev.type === 'focus';

      $input.parentNode.parentNode.classList.toggle('is-active', isActive);

      if (isActive) {
        const isValidationMessageActive  = !validateEmail($input.value);

        $input.parentNode.parentNode.classList.toggle('is-invalid', isValidationMessageActive);

      } else {
        $input.parentNode.parentNode.classList.toggle('is-invalid', false);
      }
    }

    $input.addEventListener('focus', validateField);
    $input.addEventListener('input', validateField);
    $input.addEventListener('blur', validateField);

    validateField();
  }
}

function initHeaderPromo() {
  initInput();
}

export default initHeaderPromo;

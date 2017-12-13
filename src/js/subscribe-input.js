// Moved to WP theme of Oberlo

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return email === '' ? true : re.test(email);
}

function initRegisterForm($form) {
  const $doneHeader = $form.querySelector('.form-done h4');
  const $doneButton = $form.querySelector('.form-done .button');
  const $submitButton = $form.querySelector('.form-submit .button');
  const $input = $form.querySelector('.field input');
  const $label = $form.querySelector('.field label');

  function validateField(ev = {}) {
    const isActive = $input === document.activeElement || $input.value !== '' || ev.type === 'focus';

    $input.parentNode.parentNode.classList.toggle('is-active', isActive);

    if (isActive) {
      const isValidationMessageActive = !validateEmail($input.value);

      $input.parentNode.parentNode.classList.toggle('is-invalid', isValidationMessageActive);

      return isValidationMessageActive;
    } else {
      $input.parentNode.parentNode.classList.toggle('is-invalid', false);
    }
  }

  function makeInputActive() {
    $input.parentNode.parentNode.classList.add('is-active');
    $input.focus();
  }

  if ($doneHeader && $doneButton && $input && $submitButton) {
    $doneButton.addEventListener('click', () => {
      $form.classList.remove('submit-done');
    });

    $input.addEventListener('focus', validateField);
    // $input.addEventListener('input', validateField);
    $input.addEventListener('blur', validateField);
    $label.addEventListener('click', makeInputActive);

    $submitButton.addEventListener('click', () => {
      validateField();

      if ($input.value && !$input.parentNode.parentNode.classList.contains('is-invalid')) {
        $form.classList.add('submit-loading');

        sendForm($form,
          () => {
            // success
            $doneHeader.innerText = 'Thanks for subscribing!';
            $form.classList.remove('submit-loading');
            $form.classList.add('submit-done');

            $input.value = '';
            document.body.focus();
            validateField();
          },
          (err) => {
            // // error
            $doneHeader.innerText = 'Error loading data, please try again later.';
            $form.classList.remove('submit-loading');
            $form.classList.add('submit-done');

            console.log(err);
          });
      }
    });

    validateField();
  }
}

function sendFormData(url, data, onLoad, onError) {
  const XHR = new XMLHttpRequest();
  let urlEncodedData;
  let urlEncodedDataPairs = [];

  // Turn the data object into an array of URL-encoded key/value pairs.
  for (let name in data) {
    urlEncodedDataPairs.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
  }

  // Combine the pairs into a single string and replace all %-encoded spaces to
  // the '+' character; matches the behaviour of browser form submissions.
  urlEncodedData = urlEncodedDataPairs.join('&').replace(/%20/g, '+');

  // Define what happens on successful data submission
  XHR.addEventListener('load', function (event) {
    if (onLoad) {
      onLoad(event);
    }
  });

  // Define what happens in case of error
  XHR.addEventListener('error', function (event) {
    if (onError) {
      onError(event);
    }
  });

  XHR.open('POST', url);
  XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  XHR.send(urlEncodedData);
}

function sendForm($form, onLoad, onError) {
  const formUrl = 'https://oberlo.us10.list-manage.com/subscribe/post?u=0d9b1f81906d86da6edf96d6a&amp;id=d278124e87';
  const $email = $form.querySelector('input[name=EMAIL]');
  const $token = $form.querySelector('#submit-token');

  if ($email && $token) {
    sendFormData(formUrl, {
      EMAIL: $email.value,
      [$token.name]: $token.value,
      subscribe: 'Subscribe',
    }, onLoad, onError);
  } else {
    onError('Email field not found');
  }
}

function initHeaderPromo() {
  const $headerForm = document.querySelector('.header-promo');

  if ($headerForm) {
    initRegisterForm($headerForm);
  }
}

export default initHeaderPromo;

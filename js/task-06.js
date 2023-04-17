const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', chekInput);

function chekInput(event) {
  inputEl.value.length === parseInt(inputEl.dataset.length)
    ? changeClass('valid', 'invalid')
    : changeClass('invalid', 'valid');
}

function changeClass(addClass, removeClass) {
  inputEl.classList.add(addClass);
  inputEl.classList.remove(removeClass);
}

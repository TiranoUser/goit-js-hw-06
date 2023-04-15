const inputEl = document.querySelector('#validation-input');
console.log(inputEl);

inputEl.addEventListener('blur', chekInput);

console.log(inputEl.id);

function chekInput(event) {
  if (
    inputEl.value.length > inputEl.dataset.length ||
    inputEl.value.length < inputEl.dataset.length
  ) {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
    // console.log('много или мало символов');
  } else {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
    // console.log('Все Ок ');
  }
}

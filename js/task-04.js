let counterValue = document.getElementById('value');
// console.dir(counterValue);
// console.dir(counterValue.textContent);

const decrement = document.querySelector('[data-action="decrement"]');
decrement.addEventListener('click', decrementFn);

function decrementFn() {
  counterValue.textContent = parseInt(counterValue.textContent) - 1;
}

const increment = document.querySelector('[data-action="increment"]');

increment.addEventListener('click', incrementFn);

function incrementFn() {
  counterValue.textContent = parseInt(counterValue.textContent) + 1;
}

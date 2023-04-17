let counterValue = parseInt(document.getElementById('value').textContent);

const decrement = document.querySelector('[data-action="decrement"]');
decrement.addEventListener('click', decrementFn);

function decrementFn() {
  counterValue -= 1;
  document.getElementById('value').textContent = counterValue;
}

const increment = document.querySelector('[data-action="increment"]');

increment.addEventListener('click', incrementFn);

function incrementFn() {
  counterValue += 1;
  document.getElementById('value').textContent = counterValue;
}

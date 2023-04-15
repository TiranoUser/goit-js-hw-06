function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('[type="number"]');

const createBtn = document.querySelector('[data-create]');

const destroyBtn = document.querySelector('[data-destroy]');

const boxesEls = document.getElementById('boxes');

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', deleteFn);
inputEl.addEventListener('input', amountBoxesFn);

function amountBoxesFn(event) {
  const numBoxes = inputEl.value;
  console.log(numBoxes);
}

function deleteFn(event) {
  while (boxesEls.firstChild) {
    boxesEls.firstChild.remove();
  }
}

let fragment = document.createDocumentFragment();

function createBoxes(event) {
  const boxEl = document.createElement('div');
  boxEl.style.height = '30px';
  boxEl.style.width = '30px';
  boxEl.style.backgroundColor = getRandomHexColor();
  fragment.appendChild(boxEl);

  boxesEls.append(fragment);
}

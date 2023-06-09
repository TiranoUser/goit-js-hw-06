function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const spanEl = document.querySelector('.color');
const btnEl = document.querySelector('.change-color');
btnEl.addEventListener('click', changeColorFn);

function changeColorFn(event) {
  const color = getRandomHexColor();
  spanEl.textContent = color;
  document.body.style.backgroundColor = color;
}

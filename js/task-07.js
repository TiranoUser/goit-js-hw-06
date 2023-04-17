const sliderEl = document.getElementById('font-size-control');
const outText = document.getElementById('text');

console.log(outText.style);
sliderEl.addEventListener('input', () => {
  outText.style.fontSize = sliderEl.value + 'px';
});

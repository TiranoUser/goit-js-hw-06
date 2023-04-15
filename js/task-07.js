const sliderEl = document.getElementById('font-size-control');
const outText = document.getElementById('text');

// outText.style.fontSize = '16px'; default
console.log(outText.style);
sliderEl.addEventListener('input', () => {
  outText.style.fontSize = sliderEl.value - 40 + 'px';
});

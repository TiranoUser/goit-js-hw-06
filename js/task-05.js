const nameInput = document.getElementById('name-input');

const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', (event) => {
  nameOutput.textContent = event.currentTarget.value;
  if (nameOutput.textContent.trim() === '') {
    nameOutput.textContent = 'Anonymous';
  }
});

const nameInput = document.getElementById('name-input');

const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', (event) => {
  nameOutput.textContent = event.currentTarget.value;
  console.dir(nameOutput.textContent);
  if (nameOutput.textContent === '') {
    nameOutput.textContent = 'Anonymous';
  }
});

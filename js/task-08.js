const form = document.querySelector('.login-form');

form.addEventListener('submit', submitFu);

function submitFu(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value && password.value) {
    const formData = new FormData(event.currentTarget);
    const emailObj = {};
    formData.forEach((value, name) => {
      emailObj[name] = value;
    });
    console.log(emailObj);
  } else {
    alert('Все поля должны быть заполнены');
  }
}

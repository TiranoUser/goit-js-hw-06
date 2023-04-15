const form = document.querySelector('.login-form');

form.addEventListener('submit', submitFu);

const emailEl = document.getElementsByName('email')[0];
const passwordEl = document.getElementsByName('password')[0];

function submitFu(event) {
  event.preventDefault();

  if (emailEl.value && passwordEl.value) {
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

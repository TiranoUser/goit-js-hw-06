const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.getElementById('ingredients');
let fragment = document.createDocumentFragment();

ingredients.forEach((item) => {
  const li = document.createElement('li');
  li.classList.add(item);
  li.textContent = item;
  fragment.appendChild(li);
});

list.appendChild(fragment);

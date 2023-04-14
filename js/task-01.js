const listEl = document.getElementById('categories');

console.log(`Number of categories: ${listEl.children.length}`);

for (const item of listEl.children) {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
}

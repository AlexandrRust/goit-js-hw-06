const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.getElementById('ingredients');

const elements = ingredients.map(ingredient => {
  const listEl = document.createElement('li');
  listEl.classList = 'item';
  listEl.textContent = ingredient;
  
  return listEl;
})

console.log(elements);

listIngredients.append(...elements);


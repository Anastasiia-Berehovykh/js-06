const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ing1 = document.createElement('li');
ing1.classList.add('item');
ing1.textContent = 'Potatoes';

const ing2 = document.createElement('li');
ing2.classList.add('item');
ing2.textContent = 'Mushrooms';

const ing3 = document.createElement('li');
ing3.classList.add('item');
ing3.textContent = 'Garlic';

const ing4 = document.createElement('li');
ing4.classList.add('item');
ing4.textContent = 'Tomatos';

const ing5 = document.createElement('li');
ing5.classList.add('item');
ing5.textContent = 'Herbs';

const ing6 = document.createElement('li');
ing6.classList.add('item');
ing6.textContent = 'Condiments';

const ingredientsContainer = document.querySelector('#ingredients');
ingredientsContainer.append(ing1,ing2,ing3,ing4,ing5,ing6)


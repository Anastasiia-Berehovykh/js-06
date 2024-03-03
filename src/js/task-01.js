const category = document.querySelector('#categories').children.length
console.log('Number of categories:', category);

const categoryItemEl = document.querySelectorAll('h2');
categoryItemEl.forEach((title) => {
    console.log('Category: ', title.textContent);
    console.log('Elements: ', title.nextElementSibling.children.length);
});

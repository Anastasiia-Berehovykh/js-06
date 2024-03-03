let counterValue = 0;

const valueEl = document.querySelector('#value');
const decrementEl = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');


decrementEl.addEventListener('click', onClickDecrement);
increment.addEventListener('click', onClickIncrement);

function onClickDecrement() {
counterValue-=1;
valueEl.textContent = counterValue;
};

function onClickIncrement(){
counterValue +=1;
valueEl.textContent = counterValue;
};
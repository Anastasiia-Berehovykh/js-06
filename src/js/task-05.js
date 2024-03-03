
const input = document.querySelector('#name-input');
const nameInput = document.querySelector('#name-output');

input.addEventListener('input', onInputChange);

function onInputChange(e){
    nameInput.textContent = input.value !== ""
    ? e.currentTarget.value 
    : 'Anonymous'
    
}
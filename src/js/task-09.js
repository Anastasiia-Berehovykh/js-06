const btnEl = document.querySelector('.change-color');
const colorEl = document.querySelector('.color');
const body = document.body;

btnEl.addEventListener('click', onClickBtn);


function onClickBtn(e){
 
 colorEl.textContent = body.style.backgroundColor = 
 getRandomHexColor()
 }



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

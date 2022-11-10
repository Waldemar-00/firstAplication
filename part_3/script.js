const buttonList = document.querySelectorAll('button');
const buttonBlock = document.querySelector('.btn-block');
// buttonList[0].classList.toggle('some');
// console.log(buttonList);
// buttonList[0].classList.add('some', 'red');
// console.log(buttonList);
// console.log(buttonList[0].classList.contains('some'));
// console.log(buttonList[0].classList.item(0));
// buttonList[0].classList.remove('some');
// console.log(buttonList[0].classList.contains('some'));
// buttonList[0].classList.toggle('some');
// console.log(buttonList[0].classList.contains('some'));
function togglerClassRed (event) {
if(event.target && event.target.tagName === 'BUTTON' && !event.target.classList.contains('some'))event.target.classList.toggle('red'); 
//! 'br' does not have event.target & each other
}
function togglerClassWhiteDblClick(event) {
if(event.target && event.target.classList.contains('some'))event.target.classList.toggle('white');//! deligation -- if tag has condition set
}
function addClassFifthButton(e) {
    if(e.target && e.target.matches('button.fifth'))e.target.classList.add('brown');
}
buttonBlock.addEventListener('click', togglerClassRed);
buttonBlock.addEventListener('dblclick', togglerClassWhiteDblClick);
buttonBlock.addEventListener('click',addClassFifthButton);
const button = document.createElement('button');
button.classList.add('some');
buttonBlock.append(button);

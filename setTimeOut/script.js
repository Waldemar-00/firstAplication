
// function writeText(text) {
    // console.log(text);
// } 
// const number = +prompt('Write number', '');
// function addText(writeText, number = 3) {
    // for(let i = 0; i < number; i++) {
        // if(i === 7)return;
        // setTimeout(writeText, 2000, 'timeout');
    // }
// }
// addText(writeText, number);
// 
// function writeText_1(text) {
    // console.log(text);
    // clearInterval(setInter);
// }
// const setInter = setInterval(writeText_1, 2000, 'Interval');

// const button = document.querySelector('.btn');
// const interval = setInterval(() => console.log('text'), 2000);
// button.addEventListener('click', (e) => {
    // if(e.target && e.target.classList.contains('btn'))clearInterval(interval);
// });
// let count = 0;
// let  logText = setTimeout(function log() {
        // if(count === 4)return;
        // console.log('Hello');
        // count++;
        // logText = setTimeout(log, 1000);
// }, 1000 );

const blueBox = document.querySelector('.box');
function moveBox() {
    blueBox.classList.add('brown');
    let position = 0;
    const interval = setInterval(move, 10);
    function move() {
        position += 0.2;
        blueBox.style.left = position + '%';
        blueBox.style.top = position + '%';
    if(position >= 75)clearInterval(interval);
    }
}
blueBox.addEventListener('click', moveBox);
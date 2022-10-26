'use strict';
const parentUl = document.querySelector('.promo__interactive-list');
const aliveHtmlCollection = parentUl.children;
// console.log('FUCK');
// const basket = JSON.parse(JSON.stringify(Array.from(aliveHtmlCollection)));
function addListener(arr) {
    //! ARR is DEAD
    arr.forEach((item, index) => {
        item.addEventListener('click', () => {

        });
    });

}
addListener(Array.from(aliveHtmlCollection));//! ALIVE
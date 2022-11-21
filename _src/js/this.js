// "use strict";
// const object = {
  // name: 'Abram',
  // getThis() { 
    // return this.name;
    // },
// };
// const object_1 = {
  // name: 'Fry',
// };
// function showThisStrict() {
    // console.log(this.name);
// }
// function showThis() {
  // console.log(this.name);
// }
// showThis.call(object); //! work with the same function 
// 
// showThisStrict.apply(object); //! work with the same function 
// console.log(object.getThis.bind(object)() + ' -- bind');
// // console.log(object.getThis.bind(object_1)() + ' -- bind'); //! work with a new function, we can make a lot of new functions
// 'use strict';
//! bind on page
const button = document.querySelector('button');
const adamButton = document.querySelector('.adam');
const object = {
  name: 'John',
};
const object_a = {
  name: 'Adam',
}
function showWorkThis() {
  console.log(this.name);
}
button.addEventListener('click', showWorkThis.bind(object));
adamButton.addEventListener('click', showWorkThis.bind(object_a));



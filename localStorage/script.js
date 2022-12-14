'use strict';

//? localStorage.setItem('nameKey', 'keyValue');
//? localStorage.remove('nameKey');
//? localStorage.clear();
//? console.log(localStorage.getItem('nameKey'));

const checkbox = document.querySelector('#checkbox');
const form = document.querySelector('.form-signin');
const colorChange = document.querySelector('#color');

//localStorage.setItem('color', colorChange);
if(localStorage.getItem('isChecked'))checkbox.checked = true;
checkbox.addEventListener('change', () => {
    localStorage.setItem('isChecked', 'TRUE');
});

if(localStorage.getItem('colorClick'))colorChange.style.backgroundColor = '#000000';
colorChange.addEventListener('click', () => {
    colorChange.style.backgroundColor = '#000000';
    localStorage.setItem('colorClick', 'BLACK');
});

const user = {
    name: 'Djeck',
    surname: 'Brown',
    age: 27,
    fullUser() {
        return `${this.name} ${this.surname} - ${this.age}`; 
    }
};
const userJSON = JSON.stringify(user);
localStorage.setItem('user', userJSON);
console.log(JSON.parse(localStorage.getItem('user')));



'user strict';

//! filter

// const array = ['Anna', 'Ben', 'Bob', 'John', 'Met', 'William', 'Josef'];
// const newArray = array.filter((item, index, array, thisArg) => {
    // if(item.length < 5) return true; //! work with booleans meaning
// });
// console.log(newArray);

//! map

// const arrayMAp = ['Anna', 'Ben', 'Bob', 'John', 'Met', 'William', 'Josef'];
// const newArrayMap = arrayMAp.map((item, index, array, thisArg) => {
    // if(array[(index + 1)] !== undefined)item = item +  array[(index + 1)];
    // return item;
// });
// console.log(newArrayMap);

//! some, every  

// const arraySome = ['Jane', 'John', '4'];
// console.log(arraySome.some((item) => isFinite(item)));
// console.log(arraySome.some((item) => typeof item === 'number'));
// console.log(arraySome.every((item) => typeof item === 'string'));
// console.log(arraySome.every((item) => isFinite(item)));

//! reduce 

// const numbers = ['1', '2', '3', '4', '5',];
// const initValue = 0;
// const sumNumbers = numbers.reduce((accumulator, item, index, array) => accumulator + item, initValue);
// console.log(sumNumbers);
// 
// const arrayNames = ['Anna', 'Ben', 'Bob', 'John', 'Met', 'William', 'Josef'];
// const stringFromNames = arrayNames.reduce((accumulator, name, index, array) => `${accumulator} ${name}\n`, 'name:\n');
// console.log(stringFromNames);
// 
//! Object.entries 

// const object = {
    // ann: 'person',
    // mike: 'person',
    // cat: 'animal',
    // dog: 'animal',
// };

// const arraysInArray = Object.entries(object).filter(item => {
    // if(item[1] === 'person') return item;
    // })
// .map((item) => item[0]);
// console.log(arraysInArray);

// ! TASKS
//? 1) У вас есть список фильмов с рейтингом в виде массива объектов. Напишите функцию showGoodFilms, которая будет принимать этот массив, а возвращать будет массив объектов только с теми фильмами, у которых рейтинг больше или равен 8.
const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];
function showGoodFilms(arr) {
    const raiting = arr.filter(item => {
        if(item.rating >= 8) return true;
    });
    return (raiting);
}
console.log(showGoodFilms(films));
//? 2) Напишите функцию showListOfFilms, которая будет принимать этот же массив, а возвращать будет строку, которая содержит названия фильмов через запятую.
//?Пример:
//?showListOfFilms(films) => "Titanic, Die hard 5, Matrix, Some bad film"
function showListOfFilms(arr) {
    const  string = [];
    arr.map(item => {
        string.push(item.name);
    });
    return string.join(', ');
}
console.log(showListOfFilms(films));
//? 3) Напишите функцию setFilmsIds, которая будет принимать этот же массив, а возвращать будет такой же массив с фильмами, но у каждого фильма будет новое поле id. Значение этого поля установите по нумерации фильма.
//?Пример:
//?setFilmsIds(films)  => [   { name: 'Titanic', rating: 9, id: 0 },   { name: 'Die hard 5', rating: 5, id: 1 },   { name: 'Matrix', rating: 8, id: 2 },   { name: 'Some bad film', rating: 4, id: 3 } ]

function setFilmsIds(arr) {
    const newArr = [];
    arr.map((item, index) => {
        console.log(item);
        item.id = index;
        newArr.push(item);
    });
    return newArr;
}
console.log(setFilmsIds(films));
//? 4) Запишите результат предыдущей функции в переменную tranformedArray. Напишите функцию checkFilms, которая будет проверять, что в каждом из фильмов есть поле id. Если это так - функция возвращает true. Очевидно, что сейчас условие должно выполняться, если мы передаем checkFilms(tranformedArray);
//? [
  //?{ name: 'Titanic', rating: 9, id: 0 },
  //?{ name: 'Die hard 5', rating: 5, id: 1 },
  //?{ name: 'Matrix', rating: 8, id: 2 },
  //?{ name: 'Some bad film', rating: 4, id: 3 }
//?]
const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
    return arr.every(item => item.id !== undefined || null);
}
console.log(checkFilms(tranformedArray));
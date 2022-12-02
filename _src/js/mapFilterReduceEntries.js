'user strict';

//! filter

const array = ['Anna', 'Ben', 'Bob', 'John', 'Met', 'William', 'Josef'];
const newArray = array.filter((item, index, array, thisArg) => {
    if(item.length < 5) return true; //! work with booleans meaning
});
console.log(newArray);

//! map

const arrayMAp = ['Anna', 'Ben', 'Bob', 'John', 'Met', 'William', 'Josef'];
const newArrayMap = arrayMAp.map((item, index, array, thisArg) => {
    if(array[(index + 1)] !== undefined)item = item +  array[(index + 1)];
    return item;
});
console.log(newArrayMap);

//! some, every  

const arraySome = ['Jane', 'John', '4'];
console.log(arraySome.some((item) => isFinite(item)));
console.log(arraySome.some((item) => typeof item === 'number'));
console.log(arraySome.every((item) => typeof item === 'string'));
console.log(arraySome.every((item) => isFinite(item)));

//! reduce 

const numbers = ['1', '2', '3', '4', '5',];
const initValue = 0;
const sumNumbers = numbers.reduce((accumulator, item, index, array) => accumulator + item, initValue);
console.log(sumNumbers);

const arrayNames = ['Anna', 'Ben', 'Bob', 'John', 'Met', 'William', 'Josef'];
const stringFromNames = arrayNames.reduce((accumulator, name, index, array) => `${accumulator} ${name}\n`, 'name:\n');
console.log(stringFromNames);




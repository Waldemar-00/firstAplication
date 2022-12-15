'use strict';

//? new RegExp('pattern', 'flags');
//? /pattern/flag

const answer = 'Anna';
//? - i - ignor case
//? - g - global 
//? - m - multiline
//? - s - space
//? - y - sticky
const regExp = /a/;
//! bad practice, becouse no flags!!!!!!!!!!!!!!!
console.log(answer, answer.search(regExp)); //?index, if not symbol => -1.
//? seach finds only first match
//! better practice
const regExp_1 = /a/ig;
console.log('test - ', regExp_1.test(answer));
console.log(answer.match(regExp)); //? ['sym', index, input, groups], if not symbol => null.
console.log(answer.match('a'));
console.log(answer.match('N'));
console.log('____________________________________');

const password = '...PaSSword...';
console.log(password.replace(/./g, '*'));
console.log(password.replace(/\./g, '*'));
console.log('____________________________________');

console.log('777-68-43'.replace(/\D/g, ''));
const string = 'My name is R2D2!';
console.log(string.match(/\w\d\w\d/));
console.log(string.search(/\w\d\w\d/));
console.log(/\w\d\w\d/.exec(string));


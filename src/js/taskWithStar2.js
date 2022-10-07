// let arr=['angular','typescript','react'];
// 
// const it = arr[0][Symbol.iterator]();
// 
// console.log(it.next().value);
// console.log(it.next().value);
// console.log(it.next().value);
// console.log('_______________')
// for(let i of arr[0]) {
    // console.log(i);
// }
'use strict';
let arr = [1, 2, 3, 4, 5, 6, 7];
let array = ['1', '2', '3', '4', '5', '6',];

arr.push.call(arr, ...array);

console.info(arr);
let obj = {
    a: 1,
    b: 2
};
const newObj = { ...obj};
console.info(newObj);
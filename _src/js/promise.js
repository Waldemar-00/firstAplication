//!    new Promise(executor);
//!    new Promise(function(resolve, reject) { ... });


// const promise1 = new Promise((resolve, reject) => {
// setTimeout(() => {
    // resolve('300');
// }, 300);
// setTimeout(() => {
// reject('1000');
// }, 1000);
// });
// 
// promise1.then((value) => {
// console.log(value);
// });
// promise1.catch((err) => {
    // console.log(err);
// });
// 
// function ok() {
    // console.log('ok');
// }
function error() {
    console.log(new Error('error'));
    }
// const promise2 = new Promise((resolve, reject) => {
    // resolve(ok);
    // reject(error);
// });
const string = 'Function, wich close all processes in end!';
// promise2.finally(console.log(string)); //! NO ARGUMENTS!!!!!!!!!!!!
// promise2.then(value => value(), error => error());
//?? promise2.then(null, error => error());        if we need handle only ERROR
//?? promise2.catch(error => error());             if we need handle only ERROR
//! promise chains
// let num  = 2;
// const promiseChains = new Promise((resolve, reject) => {
    // setTimeout(() => resolve(num), 2000);
// }).then(num => {
    // console.log(num);
    // return new Promise((resolve, reject) => {
        // setTimeout(() => resolve(num * 2), 4000);
    // });
// }).then(num => {
    // console.log(num);
    // return new Promise((resolve, reject) => {
        // setTimeout(() => resolve(num * 2), 2000);
        // 
    // });
// }).then(num => {
    // console.log(num);
    // return new Promise((resolve, reject) => {
        // reject();
    // });
// }).catch(error => console.log(new Error(error))).finally(() => console.log(string));

//! CLASS & then
// class Thenable {
// constructor(num) {
    // this.num = num;
// }
// then(resolve, reject) {
    // console.log(resolve); 
    // setTimeout(() => resolve(this.num * 2), 1000);
// }
// }
// 
// new Promise(resolve => resolve(1)).then(result => {
    // return new Thenable(result);
// }).then(console.log);

const testAll = time => { 
    return new Promise(resolve => {
    setTimeout(() => resolve(), time);
    });};
const testRace = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
}; 
// testAll(1000).then(() => console.log("Test_1"));
// testAll(3000).then(() => console.log("Test_3"));
Promise.all([testAll(1000), testRace(5000), testRace(2000), testAll(3000), testAll(4000)]).then(() => console.log("Succes All"));
Promise.race([testRace(1000), testAll(5000), testAll(2000), testAll(3000), testRace(4000)]).then(() => console.log("Succes Race"));



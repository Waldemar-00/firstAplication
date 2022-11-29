//!    new Promise(executor);
//!    new Promise(function(resolve, reject) { ... });


const promise1 = new Promise((resolve, reject) => {
setTimeout(() => {
    resolve('300');
}, 300);
setTimeout(() => {
reject('1000');
}, 1000);
});

promise1.then((value) => {
console.log(value);
  // expected output: "foo"
});
promise1.catch((err) => {
    console.log(err);
});

//console.log(promise1);
// expected output: [object Promise]
function ok() {
    console.log('ok');
}
function error() {
    console.log(new Error('error'));
}
const promise2 = new Promise((resolve, reject) => {
    resolve(ok);
    reject(error);
});
promise2.finally(console.log('Function, wich close all processes in end!')); //! NO ARGUMENTS!!!!!!!!!!!!
promise2.then(value => value(), error => error());
//?? promise2.then(null, error => error());        if we need handle only ERROR
//?? promise2.catch(error => error());             if we need handle only ERROR

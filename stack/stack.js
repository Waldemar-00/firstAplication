//? whatch: https://www.youtube.com/watch?v=8aGhZQkoFbQ
//?                                    about EVENT LOOP

const multiplay = ([a, b]) => a * b;  //! stack 4, worcked and was deleted from stack first 
const square = (n) => multiplay(n);  //! stack 3
const show = () => console.log(square([2, 3, 4, 5]));  //! stack 2
show();  //!stack 1 - last deleted  

//!async

console.log('Hi');

//window.
setTimeout(() => console.log('What is your name?'), 1000);  //! async, no stack!!! 
//window.
// setTimeout(() => console.log('What is your name?'),0);                                                       
                                                            //! Thancks, Browser!!!

console.log('How are you?');


const start = new Date();
console.log('Start');
const counter = () => {
    let count = 0;
    while(count < 1e9) {
        count++;
    }
    console.log('End', new Date() - start, count);
};
counter();
// 
let count = 0;
const start_1 = new Date();
console.log('start');
const counter_1 = () => {
    if(count < 100 - 20) {
    setTimeout(counter_1);
    }
    do {
        count++;
    }while(count % 20 !== 0);
    
    if(count === 100)console.log('End_2', (new Date() - start_1), count);
};
counter_1();
// 
setTimeout(() => console.log('setTimeout'));
Promise.resolve().then(() => console.log("Promise"));
queueMicrotask(() => console.log('queueMicrotask'));
Promise.resolve().then(() => console.log("Promise"));

console.log('Start console!');

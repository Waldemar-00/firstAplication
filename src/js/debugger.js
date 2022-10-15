'use strict';

// let number = 5; debugger
// 
// function returnNumber() {
    // let number = 17; debugger
    // console.log(number); debugger
// }
// number = 7; debugger
// returnNumber();
// debugger
// function returnFunc() {
    // let  count = 0;debugger
    // function returnCount() {
        // count++;debugger
        // return count;debugger
    // }
    // return returnCount;debugger
// }
// const counter = returnFunc();debugger
// const count = counter();debugger
// const count1 = counter();debugger
// const count2 = counter();debugger
// const anotherCount = returnFunc();debugger 
// const newCounter = anotherCount() ;debugger
// 

const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

function isOpen(prop) {
    let answer = '';
    prop ? answer = 'Закрыто' : answer = 'Открыто';

    return answer;
}

console.log(isOpen(restorantData.openNow));

function isAverageLunchPriceTrue(fDish, sDish, average) {
    if ( ( parseInt(fDish.price, 10) + parseInt(sDish.price, 10) ) < ( parseInt(average, 10) ) ) {
        return 'Цена ниже средней';
    } else {
        return 'Цена выше средней';
    }
}
console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

function transferWaitors(data) {
    const copy = JSON.parse(JSON.stringify(data));
    console.log(copy);
    copy.waitors[0] = {name: 'Mike', age: 32};
    console.log(copy);
    return copy;
}
transferWaitors(restorantData);
console.log(restorantData);

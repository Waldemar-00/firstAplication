// const obj = {
    // car: 'BMV',
    // year: 2022,
    // cost: 75000,
    // createStr(can, buy) {
        // if(can && buy)console.log(`Автомобиль ${this.car} ${this.year} года стоимостью ${this.cost} ${can} ${buy}`);
        // else console.log(`Автомобиль ${this.car} ${this.year} года стоимостью ${this.cost}`);
        // 
    // }
// }
// 
// const car = obj.createStr.bind(obj);//! passes scope
// car(...['можно', 'купить']);
// 
// obj.createStr.call(obj, 'можно', 'купить'); //! passes scope & call with arguments
// obj.createStr.call(obj, ...['можно', 'купить']);//! passes scope & call with spread operatos & array
// 
// obj.createStr.apply(obj, ['можно', 'купить']); //! passes scope & call with array
// 
// const numerObj = {
    // a: 1,
    // b: 2,
    // c: 3, 
    // d: 4,
    // e: 5,
    // get sum() {
        // return this.a + this.b + this.c + this.d + this.e;
    // },
    // set sum(e) {
        // this.e = e;
    // }
// }
// console.log(numerObj.sum);
// console.log(numerObj.sum = 10);
// console.log(numerObj.sum);
// 
// const user = {
    // name: 'John',
    // surname: 'Pablo',
    // get fullName() {
        // return `${this.name} ${this.surname}`;
    // },
    // set fullName(string) {
        // [this.name, this.surname] = string.split(' ');
    // }
// }
// 
// console.log(user.fullName);
// user.fullName = 'Alies Golg';
// console.log(user.fullName);

// const  obj = {
//   hasOwnProperty() {
    // return false;
//   },
//   has: 'Object.prototype.hasOwnProperty.call(obj, "property")'
// };
// obj.hasOwnProperty('has');
// ({}).hasOwnProperty.call(obj, 'has'); 
// const bool = Object.prototype.hasOwnProperty.call(obj, 'has');
// console.log(bool);
    // console.log(({}).hasOwnProperty.call(obj, 'has'));
// 
// const array = ['a','b','c', 'd'];
// console.log( array[Symbol.iterator]().next().value );
// console.log( array[Symbol.iterator]().next().done );
// console.log( array[Symbol.iterator]().next().value );
// console.log( array[Symbol.iterator]().next().value );
// console.log('________________');
// const iter = array[Symbol.iterator]();
// console.log( iter.next().value );
// console.log( iter.next().done );
// console.log( iter.next().value );
// console.log( iter.next().value );

// const arr = [4];
// const array = [1, 2, 3];
// Array.prototype.methodArray = function() {
    // return 10 + 10;
// };
// array.forEach(item => console.log(item));
// for(const item of array)console.log(item);
// console.dir(array);
// for(const item in arr)console.log(item);
// console.log('__________');
// for(const item in array)console.log(item);
// 
// const obj = {
    // a: 1,
// }
// const object = {value: 1};
// Object.prototype.methodObject = function() {};
// for(const key in obj)console.log(key);
// console.log('_______');
// for(const key in object)console.log(key);
// 
// const objectWithSymbolIterator = {
    // salaryFrom: 0,
    // Ann: 500,
    // John: 1000,
    // Mike: 1500,
// }
// objectWithSymbolIterator[Symbol.iterator] = function() {
    // return {
        // start: this.salaryFrom,
        // end: this.Mike,
        // next() {
            // if(this.start < this.end) {
                // this.start += 500;
                // return {
                    // done: false,
                    // value: this.start,
                // }
            // }else return {done: true};
        // },
    // }
// }
// for(const i of objectWithSymbolIterator)console.log(i);
// 
// const iterator = objectWithSymbolIterator[Symbol.iterator]();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// 
// 


function Auto(brand, color, price) {
    this.brand = brand;
    this.color = color;
    this.price = price;
}
const nissan = new Auto('nissan', 'red', 75000);
console.log(nissan);

Auto.prototype.getMileAge = function(years, km) {
    return years * km;
}
console.log(nissan.getMileAge(10, 1000));

const bmw = new Auto('bmw', 'blur', 120000);
console.log(bmw);
console.log(bmw.getMileAge(10, 1200));




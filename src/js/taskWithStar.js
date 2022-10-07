//1 function getValueAndSquareOfCube(edge) {
    // if(isNaN(edge) || edge <= 0 || edge % 1 !== 0)return "При вычислении произошла ошибка";
    // let  value = edge * edge * edge;
    // let  square = 6 * edge * edge;
    // let str = `Объем куба: ${value}, площадь всей поверхности: ${square}`;
    // return  str;
// }
// console.log(getValueAndSquareOfCube(5));
// 
//2 function getNumberOfCoup(ticketNumber) {
    // // if(isNaN(ticketNumber) || ticketNumber < 0 || ticketNumber % 1 !== 0 )return "Ошибка. Проверьте правильность введенного номера места";
    // else if(ticketNumber == 0 || ticketNumber > 36)return "Таких мест в вагоне не существует";
    // const  coup = Math.ceil(ticketNumber / 4);
    // return coup;
// }
// console.log(getNumberOfCoup(0));

//3 function getTime(minutes) {
    // if(minutes === 0)return  "Это 0 часов и 0 минут";
    // if(isNaN(minutes) || minutes < 0 || minutes % 1 !== 0)return  "Ошибка, проверьте данные";
    // let hour = Math.trunc(minutes / 60);
    // let min = minutes - (hour * 60);
    // if(hour === 1)return `Это ${hour} час и ${min} минут`;
    // else if(hour === 2 || hour === 3 || hour === 4)return `Это ${hour} часа и ${min} минут`;
    // return  `Это ${hour} часов и ${min} минут`;
// }
// console.log(getTime(550));

//4 function geMaxNumber(a, b, c, d) {
    // if(arguments.length < 4)return 0;
    // for(let i  of arguments) {
        // if(typeof i === 'string') {
            // return 0;
        // }
    // }
    // let maxNum = Math.max(a, b, c, d);
    // return maxNum;
// }
// console.log(geMaxNumber( 1, 2, 3, 7 ));

//5 function geMaxNumber(a, b, c, d) {
    // if (typeof a === 'string' || a === undefined)return 0;
    // if (typeof b === 'string' || b === undefined)return 0;
    // if (typeof c === 'string' || c === undefined)return 0;
    // if (typeof d === 'string' || d === undefined)return 0;
    // let maxNum = Math.max(a, b, c, d);
    // return maxNum;
// }
// console.log(geMaxNumber( 1, 2, 3, ));

//6 function getFib(number) {
    // let previousNumber = 0;
    // let nextNumber = 1; 
    // let str = '';
    // for(let i = 0; i < number - 2; i++) {
        // str += previousNumber + ' ' + nextNumber + ' ';
        // previousNumber = previousNumber + nextNumber;
        // nextNumber =  previousNumber + nextNumber;
    // }
    // return str;
// }
// console.log(getFib(5));
//7
// function getFib(number) {
    // if(isNaN(number) || number % 1 !== 0)return '';
    // let previousNumber = 0;
    // let nextNumber = 1; 
    // let str = '';
    // for(let i = 0; i < number; i++) {
        // if(i === number - 1)str += previousNumber;
        // else str += previousNumber + ' ';
        // let temporary = nextNumber;
        // nextNumber = previousNumber + nextNumber;
        // previousNumber = temporary;
        // 
    // }
    // return str;
// }
// console.log(getFib(16));

/*class Rectangle {
constructor(height, width) {
    this.height = height;
    this.width = width;
}
  // Getter
get area() {
    return this.calcArea();
}
  // Method
calcArea() {
    return this.height * this.width;
}
}

const square = new Rectangle(10, 10);

console.log(square.calcArea);*/
//!Object.keys(obj) => return array of key
// const menu = {
    // a: 1,
    // b: 2,
    // c: 3
// };
// console.log(Object.keys(menu).length);
// console.log(Object.keys(menu));
// for(let i of Object.keys(menu)) {
// }
// console.log(Object.entries(menu));

//! new Map
// let map = new Map();
// let obj = {a: 7};
// let arr = [3, 9];
// map.set(1, '1').set('1', '2').set(obj, '3').set(arr, 5);
// console.log(map);
// console.log(map.get(1));
// console.log(map.get('1'));
// console.log(map.get(obj));
// console.log(map.get(arr));
// console.log(map.has(arr));
// console.log(map.has(obj));
// console.log(map.keys());
// console.log(map.values());
// console.log(map.entries());
// console.log(map.keys());
// console.log(map.entries());
// console.log(Object.fromEntries(map.entries()));
// let objFromMap = Object.fromEntries(map);
// console.log(Object.fromEntries(map));
// let mapFromObj = new Map(Object.entries(objFromMap));
// console.log(mapFromObj);
//!destructuring
// let array = [1, 2, 3, 4, 5, 6, 7];
// let [one, two, three, four, five] = array;
// let [one1, two1, , four1, five1] = array;
// console.log(one, two, three, four, five);
// console.log(one1, two1, four1, five1);
// 
// let str = 'Name LastName';
// let str2 = "abc";
// let [firstName, lastName] = str;
// let  [firstName1, lastName1] = str.split(' ');
// let [A, B, C, D, E] = str2;
// console.log(firstName, lastName);
// console.log(firstName1, lastName1);
// console.log(A, B, C, D, E);
// 
// let obj = {};
// [obj.name, obj.lastName] = 'Name LastName'.split(' ');
// console.log(obj);
// 
//!cnange variable
// let first = 'one';
// let second = 'second';
// console.log(first, second);
// [first, second] = [second, first];
// console.log(first, second);

//!residual parameters
        //?[1, , 3, 4, 5, 6, 7, 8]
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let [one, two = 11, three, four, ...remainder] = arr;
// console.log(remainder);
// console.log(two);

//!destructuring with...
// let [firstName = prompt('What is your name?', ''), lastName = prompt('What is your last name?', '')] = ['Alesia'];
//! destructuring object 
// let obj = {
    // one: 1,
    // two: 2,
    // three: 3,
    // width: 100,
    // six: 6,
    // value: 300
// };
// // let {three: five, two, one, four = 4, six: s = (8-2),  height = prompt('What height?', ''), width = prompt('What width?', ''), seven = 7, ...residual} = obj;
// console.log(one, two, five, four, s, height, width, seven);
//!warning!!! =============================================>()!!!!!!!!!JS looking {} like code block!!! Becouse ()!!!
// let one, two, three, four;
// ({one, two, three, four} = {one: 1, two: 2, three: 3, four: 4});
// 
// 
// 
// let options = {
//   title: "My menu",
//   items: ["Item1", "Item2"]
// };
// 
// function showMenu({title = "Untitled", width = 200, height = 100, items = []}) {
//   console.log( `${title} ${width} ${height}` ); // My Menu 200 100
//   console.log( items ); // Item1, Item2
// }
// showMenu(options);

//! new Set();

// let john = {name: "John"};
// let mary = {name: "Mary"};
// let peter = {name: "Peter"};
// let dori = ['Dori'];
// let firstName = 'Sara';
// 
// let set = new Set();
// set.add(john);
// set.add(mary);
// set.add(peter);
// set.add(john);
// set.add(mary);
// set.add(john);
// set.add(dori);
// set.add(firstName);
// console.log(set);
// console.log(set.values());
// console.log(set.keys());
// console.log(set.entries());

//! Deacriptors
// 'use strict';
// const obj = {
    // a: 1, 
    // b: 2, 
    // c: 3
// };
// Object.defineProperty(obj, 'name', {
    // value: 'Daive',
    // /* writable: true,//default: false*/
    //    enumerable: true,//default: false
    //   /* configurable: true//default: false */
// });
// 
// /*obj.name = 'Serg';//?ERROR in STRICT else error only  not show, but it will be*/
// 
// const descriptor = Object.getOwnPropertyDescriptor(obj, 'name');
// console.log(descriptor);
// console.log(obj.name);
// console.log('_____________');
// Object.defineProperty(obj, 'c', {
    // enumerable: false,
// } );
// for(let value in obj) {
    // console.log(value);//enumerable false - not show property
// }
// console.log('_____________');
// const clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));
// console.log(clone);
// 
//! data-properties && data-accessor
// const object = {
    // name: 'Djeck',
    // lastName: 'Brown',
// 
    // get fullName() {
        // return `${this.name} ${this.lastName}`;//?data-accessor
    // },
    // set fullName(value) {
        // [this.name, this.lastName] = value.split(' ');
    // }
// }
// console.log(object.fullName);
// object.fullName = 'Maria Rettris';
// console.log(object.fullName);

// const obj = {
    // a: 1, 
    // b: 2, 
    // c: 3, 
    // d: {
        // name: 'Alesia',
        // lastName: 'Ferba'
    // }
// }
// const objLen = Object.keys(obj).length;
// console.log(objLen);




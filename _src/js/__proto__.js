// const obj = {
    // value: 18,
// };
// const age = {
    // age: obj,
// }
// const exemp = obj;
// 
// console.log(age.age === obj);
// console.log(exemp === age.age);
// console.log(obj === exemp);
// 
// const str = 'string';
// console.log(str.__proto__);
// const bool = true;
// console.log(bool.__proto__);
// const number = 18;
// console.log(number.__proto__);
// const object = {};
// console.log(object.__proto__);
// const array = [];
// console.log(array.__proto__);

// const obj = {a: 1};
// const object = {b: 2};
// const bool = obj.__proto__ === object.__proto__;
// const array = [];
// const boolArr = obj.__proto__ !== array.__proto__;
// console.log(bool);
// console.log(boolArr);
// class A {};
// function b(){};
// const func = A.__proto__ === b.__proto__;
// console.log(func);

// const user = {naem: 'John'};
// console.log(user.prototype);
// console.log(user.__proto__.constructor.__proto__);

class Hello {
    constructor(name) {
        this.name = name;
    }
    hello() {
        return `${this.name}, Hello!`};
}
const sey = new Hello('John');
console.log(sey.hello());
console.log(sey.prototype);
console.log(Hello.prototype);
console.log(Hello.prototype.__proto__);
console.log(sey.__proto__);
console.log(sey.__proto__.__proto__);
console.log(sey.__proto__.__proto__.__proto__);
console.log(sey.__proto__.constructor);
console.log(sey.__proto__.constructor.__proto__);




// 'use strict';
//! function constructor
// function User(name, surname, age, email, password) {
    // this.name = name;
    // this.surname = surname;
    // this.age = age;
    // let userEmail = email;
    // this.password = password;
// 
    // this.say = () => {
        // return `User name is ${this.name}, user age is ${this.age}, and his email: ${userEmail}`;
    // };
    // this.getEmail = () => {
        // return userEmail;
    // };
    // this.setEmail = (mail) => {
        // return (userEmail = mail);
    // };
// }
// 
// const alex = new User('Alex', 'Brown',  40, 'example@ggl.com');
// console.log(alex.name, alex.age, alex.userEmail, alex.email, '|', alex.say());
//!Alex 40 undefined undefined | User name is Alex, user age is 40, and his email: example@ggl.com
// 
// alex.name = 'John';
// alex.age = 41;
// alex.email = 'John@example.com';//! new record
// alex.userEmail = 'Mina@example.com'; //! new record
// 
// console.log(alex.name, alex.age, alex.userEmail, alex.email, '|',alex.say());
//! John 41 Mina@example.com John@example.com | User name is John, user age is 41, and his email: example@ggl.com
// 
// console.log(alex.getEmail());
// alex.setEmail('NEW@ggl.com');
// console.log(alex.getEmail());
// 

// 'use strict';
//! Class
// class User {
    // constructor(name, surname, age, email, password) {
        // this.name = name;
        // this.surname = surname;
        // this.age = age;
        // let userEmail = email;
        // this.password = password;
// 
        // this.say = () => {
        // return `User name is ${this.name}, user age is ${this.age}, and his email: ${userEmail}`;
        // };
        // this.getEmail = () => {
            // return userEmail;
        // };
        // this.setEmail = (mail) => {
            // return (userEmail = mail);
        // };
    // }
// }
// 
// const alex = new User('Alex', 'Brown',  40, 'example@ggl.com');
// console.log(alex.name, alex.age, alex.userEmail, alex.email, '|', alex.say());
//!Alex 40 undefined undefined | User name is Alex, user age is 40, and his email: example@ggl.com
// 
// alex.name = 'John';
// alex.age = 41;
// alex.email = 'John@example.com';//! new record
// alex.userEmail = 'Mina@example.com'; //! new record
// 
// console.log(alex.name, alex.age, alex.userEmail, alex.email, '|',alex.say());
//! John 41 Mina@example.com John@example.com | User name is John, user age is 41, and his email: example@ggl.com
// 
// console.log(alex.getEmail());
// alex.setEmail('NEW@ggl.com');
// console.log(alex.getEmail());


//! _class_2

'use strict';
//! Class
class User {
    constructor(name, surname, age, email, password) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this._email = email;
        this.password = password;
    }
    #password;
        say() {
        return `User name is ${this.name}, user age is ${this.age}, and his email: ${this._email}, password: ${this.#password}`;
        }
        get password() { 
            return this.#password;
        }
        set password(value) {
            return (this.#password = value);
        }
        getEmail(){
            return this._email;
        }
        setEmail(mail){
            return (this._email = mail);
        }
        //! truth get & set
        get email(){
            return this._email;
        }
        set email(mail){
            return (this._email = mail);
        }
    
}

const alex = new User('Alex', 'Brown',  40, 'example@ggl.com');
console.log(alex.name, alex.age, alex.userEmail, alex.email, '|', alex.say());
// !Alex 40 undefined undefined | User name is Alex, user age is 40, and his email: example@ggl.com

alex.name = 'John';
alex.age = 41;
alex.email = 'John@example.com';//! new record
alex.userEmail = 'Mina@example.com'; //! new record

console.log(alex.name, alex.age, alex.userEmail, alex.email, '|',alex.say());
//! John 41 Mina@example.com John@example.com | User name is John, user age is 41, and his email: example@ggl.com

console.log(alex.getEmail());
alex.email = 'NEW@ggl.com';
console.log(alex.email);

console.log('___________________________');
alex.email = 'NEONEW@GGL.COM';//! work like setter
console.log(alex.email); //! work like getter
console.log(alex.say());
console.log(alex.password);
//!console.log(alex.#password); -- SyntaxError: Private field '#password' must be declared in an enclosing class
console.log('set & get for #password private!');
alex.password = 'QWERTYUIOP123';
console.log(alex.password);
console.log(alex.say());
console.log(alex.password);

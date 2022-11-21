// 'user strict';

function User(name, surname, age, adress) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.adress = adress;
    this.hello = function() {
        console.log(`${this.name} ${this.surname}, Hello!`);
    };
}
User.prototype.getAdress = function() { //!  record only through prototype
    console.log(`Adress: ${this.adress}`);
};

const user_1 = new User('Michel', 'Keidge', 38, 'New York');
user_1.bye = function() {                  //! you can make record through POINT
    console.log(`${this.name}, Bye!`);
};
user_1.hello();
user_1.getAdress();
console.log(user_1);
console.log(User);

for(const key in user_1) { //! including keys from prototype
    console.log(key);
}
console.log(Object.keys(user_1)); //! including ONLY objetc keys
console.log(Object.values(user_1));//! including ONLY objetc values, NO! prototype
console.log('__________________');
console.log('bye' in user_1);
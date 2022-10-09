// const personalPlanPeter = {
    // name: "Peter",
    // age: "29",
    // skills: {
        // languages: ['ru', 'eng'],
        // programmingLangs: {
            // js: '20%',
            // php: '10%'
        // },
        // exp: '1 month'
    // },
    // showAgeAndLangs: function(plan) {
        // let str = `Мне ${plan.age} и я владею языками: `;
        // for(let i of plan.skills.languages) {
            // str += `${i.toUpperCase()} `;
        // }
        // return str;
    // }
// };
// function showExperience(plan) {
// return plan.skills.exp;
// }
// console.log(showExperience(personalPlanPeter));
// 
// function showProgrammingLangs(plan) {
    // let str = '';
    // for(let i in plan.skills.programmingLangs) {
        // if((plan.skills.programmingLangs)) {
            // str += `Язык ${i} изучен на ${plan.skills.programmingLangs[i]}\n`;
        // }
    // }
    // return str;
// }
// console.log(showProgrammingLangs(personalPlanPeter));
// console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

// 'use strict';
// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
    // let str = 'Семья пуста';
    // if(arr[0]) {
        // str = 'Семья состоит из: '; 
        // for(let i of arr) {
        // str += `${i} `;
    // }
    // }
    // return str;
// }
// console.log(showFamily(family));
// 
// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];
// 
// function standardizeStrings(arr) {
    // for(let i of arr)console.log(i.toLowerCase());
// }
// standardizeStrings(favoriteCities);
// 

// const someString = 10;
// 
// function reverse(str) {
    // if(typeof str !=='string')return  "Ошибка!";
    // const strangeStr = str.split('').reverse().join('');
    // return strangeStr;
// }
// 
// console.log(reverse(someString));

// 4) Представьте такую реальную ситуацию. У вас есть банкомат, который выдает деньги из двух разных банков в разных валютах. Один банк основной с базовыми валютами, второй дополнительный с прочими валютами:
// 


// // // // Вам нужно создать главную функцию банкомата availableCurr, которая принимает два аргумента: первый - это массив со всеми доступными валютами из двух банков сразу (сейчас представим, что они не могут повторяться), второй - необязательный аргумент, который указывает ту валюту, которая сейчас закончилась в банкомате. Если массив в первом аргументе пустой - то функция возвращает строку 'Нет доступных валют'. Функция возвращает строку в нужном виде.
// 
// Пример:
// 
// availableCurr(['UAH', 'RUB', 'CNY'], 'CNY')
// Вернет строку:
// 
// Доступные валюты:
// UAH
// RUB
// Заметьте:
// 
// - CNY (юань) исчез из списка валют, значит такая валюта закончилась
// 
// - После валюты: стоит перенос строки \n, и после каждой валюты тоже. Это важно для тестов
// 
// // - Данные для первого аргумента должны приходить сразу из двух банков, причем сначала baseCurrencies, потом additionalCurrencies по порядку

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
// 
// function availableCurr(arr, missingCurr) {
    // let str = 'Доступные валюты:\n';
    // if(!arr[0])return 'Нет доступных валют';
    // for(let i of arr) {
        // if(i === missingCurr)continue;
        // else {
            // str += `${i}\n`;
        // }
    // }
// 
    // return str;
// }
// console.log(availableCurr(['UAH', 'RUB', 'CNY'], 'CNY'));
// 

//! const obj = {1: 'a', 2: 'b'};
//! console.log(Object.getPrototypeOf(obj));
//! console.log(Object.getOwnPropertyDescriptors(obj));
//! const clone = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));
//! console.log(clone);
//! console.log(Object.getPrototypeOf(clone));
//! console.log(Object.getOwnPropertyDescriptors(clone));

// function makeCar(make, model, year, owner) {
    // this.make = make;
    // this.model = model;
    // this.year = year;
    // this.owner = owner;
// }
// const makeObj = new makeCar('USA', 'Colorado', 1997);
// 
// console.log(makeObj);
// 
// function Person(name, age, sex) {
    // this.name = name;
    // this.age = age;
    // this.sex = sex;
// }
// const rand = new Person("Rand McNally", 33, "M");
// const ken = new Person("Ken Jones", 39, "M");
// const car1 = new makeCar("Eagle", "Talon TSi", 1993, rand);
// const car2 = new makeCar("Nissan", "300ZX", 1992, ken);
// console.info(car1,'________', car2);
// console.log(car1.owner.sex, '___', car2.owner.sex);

// const str = 'string';
// const objString = new String(str);
//console.log(`${str}\n`, objString);
// console.dir(objString);
// console.dir(str);

const sectionCss = {
    width: '100%',
    height: '100vh',
    backgroundColor: 'black'
};
const sectionFloor = {own: 'property'};
Object.setPrototypeOf(sectionFloor, sectionCss);
// console.log(Object.getPrototypeOf(sectionFloor));
// console.log(Object.getOwnPropertyDescriptors(sectionFloor));
// const sectionFloor = Object.create(sectionCss, { height: {
    // value: '30vh'
// }
// }
// ); 
// console.info(Object.getPrototypeOf(sectionFloor));
// const clone = Object.create(Object.getPrototypeOf(sectionFloor), Object.getOwnPropertyDescriptors(sectionFloor));
// console.log(typeof clone);
// console.log(Object.getOwnPropertyDescriptors(clone));
// 
const str = null;
const strNull = str.trim();
console.log(strNull);
const obj = {
    car: 'BMV',
    year: 2022,
    cost: 75000,
    createStr(can, buy) {
        if(can && buy)console.log(`Автомобиль ${this.car} ${this.year} года стоимостью ${this.cost} ${can} ${buy}`);
        else console.log(`Автомобиль ${this.car} ${this.year} года стоимостью ${this.cost}`);
        
    }
}

const car = obj.createStr.bind(obj);//! passes scope
car(...['можно', 'купить']);

obj.createStr.call(obj, 'можно', 'купить'); //! passes scope & call with arguments
obj.createStr.call(obj, ...['можно', 'купить']);//! passes scope & call with spread operatos & array

obj.createStr.apply(obj, ['можно', 'купить']); //! passes scope & call with array

const numerObj = {
    a: 1,
    b: 2,
    c: 3, 
    d: 4,
    e: 5,
    get sum() {
        return this.a + this.b + this.c + this.d + this.e;
    },
    set sum(e) {
        this.e = e;
    }
}
console.log(numerObj.sum);
console.log(numerObj.sum = 10);
console.log(numerObj.sum);

const user = {
    name: 'John',
    surname: 'Pablo',
    get fullName() {
        return `${this.name} ${this.surname}`;
    },
    set fullName(string) {
        [this.name, this.surname] = string.split(' ');
    }
}

console.log(user.fullName);
user.fullName = 'Alies Golg';
console.log(user.fullName);
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


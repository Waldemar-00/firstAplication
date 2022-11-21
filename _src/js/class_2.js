class Example {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    get area() {
        return this.calcArea();
        
    }
    calcArea() {
        return this.height * this.width;
    }
}

const Rectangle = class Example_1 { //!!!! Example_1 use for methods, set and get in class. Rectangle is the new refference for class Example_1, but not use with class Example_1!!!
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    static _cashName ='John'; 
    static get cashName() {
        return this._cashName;
    }
    static set cashName(value){
        this._cashName = value;
    }
};
class Example_3 extends Example {
    constructor(height, width, sides) {
        super(height, width);
        this.sides = sides;
    }
    perimeter() {
        return this.height * this.sides + this.width * this.sides;
    }
}
const perimeter = new Example_3(10, 20, 2);
console.log(perimeter.perimeter());
console.log(perimeter.calcArea());
console.log(perimeter.area);
const cashNAme = new Rectangle(10, 10);
console.log(cashNAme._cashName);  //! undefined !!!!!!!!!!!!!!!!!! becouse STATIC 
console.log(cashNAme.cashName);  //! undefined !!!!!!!!!!!!!!!!!! becouse STATIC 
console.log(Rectangle._cashName);
console.log(Rectangle.cashName);
Rectangle.cashName = 'Anna';     //! used set in class Rectangle
console.log(Rectangle.cashName);
const area = new Example(10, 10);

console.log(area.area);



// console.log(Example);
// console.log(typeof Example);
// console.log(Rectangle);
// console.log(Rectangle.name);
// console.log(Rectangle.prototype);
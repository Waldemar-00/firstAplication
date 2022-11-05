/*
function* generator(a, b, c, d, e) {
    // yield a;
    // yield b;
    // yield c;
    // yield d;
    // yield e;
    for(const i of arguments) {
        yield i;
    }
}
const array = [
    'first',
    'second',
    'third',
    'four',
    'fifth',
]
const iteration = generator(...array);
console.log(iteration.next().value);
console.log(iteration.next().value);
console.log(iteration.next().value);
console.log(iteration.next().value);
console.log(iteration.next().value);
console.log(iteration.next());// terminal condition is Infinity => done: true
console.log(iteration.next());// terminal condition is Infinity => done: true
*/
//? GENERATOR

const objectIterator = {
    arr: ['first',
            'second',
            'third'  ],
    methodGenerator(array = this.arr) {
        let counter = 0;
        return {
            next() {
                if(counter < array.length) return {value: array[counter++],done: false};
                else return {value: array[counter],done: true};
            }
        }
    },
    getMethodGenerator(arr = this.arr) {
        iterator = objectIterator.methodGenerator(arr);
        for(let i = 0; i < arr.length; i++) {
            console.log(iterator.next().value);
        }
    return console.log(iterator.next());
}
}
const arr = [
    'first',
    'second',
    'third',
    'four',
    'fifth'
];
objectIterator.getMethodGenerator();
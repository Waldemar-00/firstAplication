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


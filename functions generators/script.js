function* generator() {
    yield 'Hi';
    yield 'Boris';
    yield 'How are you?';
}
console.log(generator().next());
console.log(generator().next());
console.log(generator().next());

const gen = generator();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

function* counter(n) {
    for (let i = 0; i <= n; i++) {
        yield i;
    }
}
const iter =  11;
const count = counter(iter);

function getAllNext(iter) {
    for(let i = 0; i <= iter; i++) {
        console.log(count.next().value);
    }
    console.log(count.next());
}
getAllNext(iter);

function* counterFor(n) {
    for (let i = 0; i <= n; i++) {
        yield i;
    }
}

for(const k of counterFor(7)) {
    console.log(k);
}
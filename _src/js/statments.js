//! ?.
// const names = 'John';
// const object = {
    // a: 1,
    // b: {
        // c: 3,
    // },
    // d: {
            // f: names,
    // }
// };
// console.log(object.d?.e?.f ?? object.b.c);

//! ?  All Nullish
// const a = '';
// const b = NaN;
// const c = 'No a, no b';
// const rez = a || b  ? a + b : c;
// console.log(rez);

//! ?? only null & undefined

const a = null;
const b = 'b';
const r = a ?? b;
console.log(r);

const c = undefined;
const d = "d";
const rez = c ?? d;
console.log(rez);

const e = NaN;//return first which not null & not undefined
const f = "f";
const re = e ?? f;
console.log(re);
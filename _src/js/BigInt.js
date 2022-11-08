const num_1 = 1e6;
console.log(num_1);
const num_2 = 10000000000000000000000000000000000000n + 1n;
console.log(num_2);
const num_3 = BigInt(num_2) + BigInt(num_1);
console.log(num_3);
console.log(5n / 2n === 2n);//! Округление до целого, простым отбрасыванием float
console.log('___________');
console.log(2n == 2);//!Приведение!!!
console.log(2n === 2);
console.log(5n > 4);
console.log(5n < 4);

console.log(2n + BigInt(2));
console.log(Number(2n) + 2);//! Number коверутрует BigInt with cut 2^53 - 1; 
//! унарный плюс в качестве приведения типов данных к Number not work
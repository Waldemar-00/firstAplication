const array = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5,];
const set = new Set();
const setFromArray = new Set(array);
const object = {a: 1, b: 2, c: 3};
const setFromObject = new Set(Array.from(Object.values(object)));
const arrayFromSet = Array.from(setFromArray);
console.log(set);
console.log(setFromArray);
console.log(setFromObject);
console.log(arrayFromSet);
set.add('first');
set.add('second');
console.log(set.size);

function uniqueArr(array) {
    return Array.from(new Set(array));
}
console.log(array, uniqueArr(array));
const array = [
    {bread: 400},
    {rice: 500},
    {tomato: 1000},
];
const map = new Map([[1, 'fisrtMap']]);
map.set(array[0], 8000);
map.set(array[1], 10000);
map.set(array[2], 20000);
console.log(map);
console.log(map.size);
console.log(map.get(array[0]));
console.log( map.keys()[0]);
const mapTwo = new Map();
console.log(mapTwo);
map.delete(1, 'fisrtMap');
console.log(map);

const arrayFoods = [];
const arrayAmounts = [];
const arrayBudgets = [];
function getFoods(arrayKeys) {
    for(const food of map.keys()) {
        arrayKeys.push(...(Object.keys(food)));
    }
    return arrayKeys;
}
function getAmounts(arrayValues) {
    for(const amount of map.keys()) {
        arrayValues.push(...(Object.values(amount)));
    }
    return arrayValues;
}
function getBudget(arrayBudgets) {
    for(const budget of map.values()) {
        arrayBudgets.push(budget);
    }
    return arrayBudgets;
}
console.log(getFoods(arrayFoods));
console.log(getAmounts(arrayAmounts));
console.log(getBudget(arrayBudgets));
const object = {
    a: 1,
    b: 2,
};
console.log((Object.entries(object)));
const mapFromObject = new Map(Object.entries(object));
console.log(mapFromObject);

const objectFromEntriesMap = Object.fromEntries(mapFromObject);
console.log(objectFromEntriesMap);
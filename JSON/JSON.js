'use strict';

const objectUser = {
    name: 'John',
    surname: 'Count',
    adress: 'Dublin',
};
console.log(objectUser);
const jsonUSer = JSON.stringify(objectUser);
// console.log(jsonUSer);
const objectUserFromJSON = JSON.parse(jsonUSer);
// console.log(objectUserFromJSON);
objectUserFromJSON.parents = {
    mom: 'Anna',
    dad: 'Josef',
};
console.log(objectUserFromJSON.parents);
console.log(objectUser.parents);

const newObjectUserParents = (JSON.parse(JSON.stringify(objectUserFromJSON)));
console.log(newObjectUserParents);
const parentEl = document.querySelector('.promo__interactive-list');
const htmlCollection = parentEl.children;

const nodeListWithAllNodes = parentEl.childNodes;

const listElements = document.querySelectorAll('.promo__interactive-item');

// console.log(parentEl);
// console.log(htmlCollection, '- HTMLCollection form children');
// console.log(nodeListWithAllNodes, '- node List With All Nodes from childNodes');
// console.log(listElements, '-  node List fom querySelectorAll');

const htmlArray = Array.from(htmlCollection);

const newEl = document.createElement('li');
const oneEl = listElements[0].innerHTML;
newEl.innerHTML = oneEl;
newEl.className = 'promo__interactive-item';
newEl.textContent = 'MOVIES';
parentEl.append(newEl);


console.log(htmlArray);//! STATIC COLLECTION
Array.from(htmlCollection).forEach((elem, index) => console.log(`${index} - ${elem.textContent}`));//! ALIVE ARRAY
Array.from(htmlCollection).forEach((elem, index) => console.log(`${index} - ${elem.innerHTML}`));//! ALIVE ARRAY

//listElements.forEach(elem => console.log(elem));//?querySelectorAll, NodeList - dead, like array, WITHOUT text nodes
//nodeListWithAllNodes.forEach(elem => console.log(elem));//!childNodes, NodeList - alive, like array,  NodeList WITH text nodes
// htmlCollection.forEach(elem => console.log(elem));//?children, HTMLCollection - alive, like OBJECT.

// const aliveNodeListWithoutTextNodes = Array.from(nodeListWithAllNodes);
// console.log(aliveNodeListWithoutTextNodes);


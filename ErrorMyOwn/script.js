'use strict';

const data = [
    {
        id: 'box',
        tag: 'div'
    },
    {
        id: 'nav1',
        tag: 'nav'
    },
    {
        id: 'circle',
        tag: '',
    }
]

// data.forEach((blockObj, index) => {
    // const block = document.createElement(blockObj.tag);
    // if(!blockObj.id) throw new Error(`Error: in "data" under the index ${index}, 'data' does not have value of id`);
    // block.setAttribute('id', blockObj.id);
    // document.body.append(block);
// });

try{
    data.forEach((blockObj, index) => {
        const block = document.createElement(blockObj.tag);
        if(!blockObj.id) throw new SyntaxError(`Error: in "data" under the index ${index}, 'data' does not have 
        value of id`);
        block.setAttribute('id', blockObj.id);
        document.body.append(block);
    });
}catch(e) {
    if(e.name === 'SyntaxError') {
        console.log(e.name);
        console.log(e.message);
        console.log(e.stack);
        console.error(e.name);
        console.error(e.message);
        console.error(e.stack);
    } else throw e;//! critical error, it broken code!!!
}
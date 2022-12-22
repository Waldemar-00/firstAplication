// const  myModule = require('./modul'); 
// 
// const myModuleInstance = new myModule();
// 
// myModuleInstance.hello();
// myModuleInstance.bye();

'use strict';
import {myModule} from './modules/modul.js'; 

const myModuleInstance = new myModule();

myModuleInstance.hello();
myModuleInstance.bye();

import {arr} from './modules/modul.js';
console.log(arr);
document.querySelector('body').style.backgroundColor  = 'green';

import {one as first} from './modules/modul.js';
first();

import * as data from './modules/modul.js';

data.one();

const instanceFromObjData = new data.myModule();
instanceFromObjData.hello();
instanceFromObjData.bye();

import defaulty from './modules/modul.js';
defaulty();


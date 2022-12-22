// function myModule() {
    // this.hello = function() {
        // console.log("Hello!");
    // };
    // this.bye = function() {
        // console.log("bye!");
    // };
// }
// 
// module.exports = myModule;
'use strict';
class myModule {
    constructor() {
        this.hello = function () {
            console.log("Hello!");
        };
        this.bye = function () {
            console.log("bye!");
        };
    }
}
export {myModule} ; //! 1

export const arr = [1, 2, 3, 4, 5,]; //! 2

export function one() {
    console.log('ONE - FIRST');
}

export default function defaulty() {
    console.log('defaulty - FIRST');
}

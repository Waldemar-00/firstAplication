
//! SPLICE
// const array = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
// 
// function spliceArray(arr) {
        // arr.splice(3, 0, 'd');
        // arr.splice(0, 0, "a");
        // arr.splice(1, 0, "b");
        // arr.splice(2, 0, "c");
        // arr.splice(4, 0, "e");
    // console.log(arr);
        // arr.splice(0, 1, "d");
        // arr.splice(0, 1, "a");
        // arr.splice(0, 1, "b");
        // arr.splice(0, 1, "c");
        // arr.splice(0, 1, "e");
    // console.log(arr);
        // const returnArr =  arr.splice(0, 9, "e");
        // console.log('return', returnArr);
    // console.log('____________', arr);
    // console.log(Array.isArray(arr.splice(0, array.length, array.length)));
        // arr.push(11);
        // arr.forEach(item => console.log(item));
// }
// spliceArray(array);

//! SLICE 

// const arraySlice = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
// const newArr = arraySlice.slice(0, arraySlice.length);
// newArr.push('AAA');
// console.log('arraySlice', arraySlice);
// console.log('newArr', newArr);
// 
// const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// let  newStr = str.slice(0, str.length);
// console.log('str', str);
// console.log('newStr', newStr);
// newStr += "str";
// console.log("str", str);
// console.log("newStr", newStr);

//! SPLIT 

const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(str.split('').reverse().join(''));
console.log(str);
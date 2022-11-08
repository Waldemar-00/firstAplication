// function amountOfPages(summary){
    // if(summary === 1)return 1;
    // let str = '';
    // let counter = 1;
        // for(let j = summary; str.length < summary; j--) {
            // str += counter;
            // counter++;
        // }
        // if(counter < 10)str = str[str.length - 1];
        // else if(counter < 100)str = str[str.length - 2] + str[str.length - 1];
        // else if(counter < 1000)str = str[str.length - 3] + str[str.length - 2] + str[str.length - 1];
    // return +str;
// }
// console.log(amountOfPages(401));
// 

function isPangram(string) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const setFromString = new Set(string.split(' ').join('').toUpperCase().split('').sort());
    const newString = (Array.from(setFromString)).join('');
    if(newString === alphabet) return true;
    else return false;
}
console.log(isPangram('The quick brown fox jumps over the lazy dog'));
console.log(isPangram('Hello World'));


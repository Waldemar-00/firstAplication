//1 function getValueAndSquareOfCube(edge) {
    // if(isNaN(edge) || edge <= 0 || edge % 1 !== 0)return "При вычислении произошла ошибка";
    // let  value = edge * edge * edge;
    // let  square = 6 * edge * edge;
    // let str = `Объем куба: ${value}, площадь всей поверхности: ${square}`;
    // return  str;
// }
// console.log(getValueAndSquareOfCube(5));
// 
//2 function getNumberOfCoup(ticketNumber) {
    // // if(isNaN(ticketNumber) || ticketNumber < 0 || ticketNumber % 1 !== 0 )return "Ошибка. Проверьте правильность введенного номера места";
    // else if(ticketNumber == 0 || ticketNumber > 36)return "Таких мест в вагоне не существует";
    // const  coup = Math.ceil(ticketNumber / 4);
    // return coup;
// }
// console.log(getNumberOfCoup(0));

//3 function getTime(minutes) {
    // if(minutes === 0)return  "Это 0 часов и 0 минут";
    // if(isNaN(minutes) || minutes < 0 || minutes % 1 !== 0)return  "Ошибка, проверьте данные";
    // let hour = Math.trunc(minutes / 60);
    // let min = minutes - (hour * 60);
    // if(hour === 1)return `Это ${hour} час и ${min} минут`;
    // else if(hour === 2 || hour === 3 || hour === 4)return `Это ${hour} часа и ${min} минут`;
    // return  `Это ${hour} часов и ${min} минут`;
// }
// console.log(getTime(550));

//4 function geMaxNumber(a, b, c, d) {
    // if(arguments.length < 4)return 0;
    // for(let i  of arguments) {
        // if(typeof i === 'string') {
            // return 0;
        // }
    // }
    // let maxNum = Math.max(a, b, c, d);
    // return maxNum;
// }
// console.log(geMaxNumber( 1, 2, 3, 7 ));

//5 function geMaxNumber(a, b, c, d) {
    // if (typeof a === 'string' || a === undefined)return 0;
    // if (typeof b === 'string' || b === undefined)return 0;
    // if (typeof c === 'string' || c === undefined)return 0;
    // if (typeof d === 'string' || d === undefined)return 0;
    // let maxNum = Math.max(a, b, c, d);
    // return maxNum;
// }
// console.log(geMaxNumber( 1, 2, 3, ));

//6 function getFib(number) {
    // let previousNumber = 0;
    // let nextNumber = 1; 
    // let str = '';
    // for(let i = 0; i < number - 2; i++) {
        // str += previousNumber + ' ' + nextNumber + ' ';
        // previousNumber = previousNumber + nextNumber;
        // nextNumber =  previousNumber + nextNumber;
    // }
    // return str;
// }
// console.log(getFib(5));
//7
function getFib(number) {
    if(isNaN(number) || number % 1 !== 0)return '';
    let previousNumber = 0;
    let nextNumber = 1; 
    let str = '';
    for(let i = 0; i < number; i++) {
        if(i === number - 1)str += previousNumber;
        else str += previousNumber + ' ';
        let temporary = nextNumber;
        nextNumber = previousNumber + nextNumber;
        previousNumber = temporary;
        
    }
    return str;
}
console.log(getFib(16));

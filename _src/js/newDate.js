// const time = new Date(2000, 5, 1, 12, 15, 54);
// console.log(time);
// console.log(Date());
// console.log(new Date(0));
// console.log(new Date(24 * 3600 * 1000));
// const stringTime = new Date('December 17, 2016, 9:00:00');
// console.log(stringTime);
// console.log('________');
// const theBigDay = new Date('July 1, 1999');
// console.log(theBigDay.getTime());
// const sameAsBigDay = new Date();
// console.log(sameAsBigDay);
// console.log(sameAsBigDay.setTime(theBigDay.getTime()));
// console.log(sameAsBigDay.setTime(theBigDay));

// const time = new Date(); //! it is object, has methods
// console.log(time.getFullYear());
// console.log(time.getMonth());
// console.log(time.getDate());
// console.log(time.getDay());
// console.log(time.getHours());
// console.log(time.getMinutes());
// console.log(time.getSeconds());
// console.log(time.getMilliseconds());
// console.log('______________________')
// console.log(time + ' Time');
// 
// const timeNew = Date(); //! it is a string, no methods!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// console.log(timeNew + ' newTime');
// console.log(timeNew.getFullYear);

// const time = new Date();
// console.log(time);
// console.log(time.setFullYear(2010));
// console.log(time.setUTCFullYear(2010));
// console.log(new Date().setUTCFullYear(2010));
// console.log(time.setTime(2010));
const timeStart = Date.now();
function times(n) {
    let str = '';
    for(let i = 0; i < n; i++) {
            str += i;
    }
    return str;
}
times(20000);
const timeEnd = Date.now();
function timeFor(start, end) {
    const rezalt = end - start;
    return rezalt;
}
const rezalt_1 = timeFor(timeStart, timeEnd);
console.log(rezalt_1);

console.log(new Date(0)); //! milliseconds
console.log(new Date(-777777777777));
console.log(new Date(1945, 5, 9, 22, 37, 2));
console.log('1945-05-09T22:37:02.223Z');
console.log(new Date().getHours());
console.log(new Date().getUTCHours());//! UTC +0

console.log(new Date().getTimezoneOffset());//! in minutes
console.log(new Date().getTime());//!milliseconds from 1.01.1970
console.log(Date());//! full date in string
console.log(typeof Date());
const newTime = new Date();
newTime.setHours(17); //! stands on 17 hours, but VSC return in UTC - 14 => ................Z
console.log(newTime);
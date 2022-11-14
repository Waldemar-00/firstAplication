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

const time = new Date(); //! it is object, has methods
console.log(time.getFullYear());
console.log(time.getMonth());
console.log(time.getDate());
console.log(time.getDay());
console.log(time.getHours());
console.log(time.getMinutes());
console.log(time.getSeconds());
console.log(time.getMilliseconds());
console.log('______________________')
console.log(time + ' Time');

const timeNew = Date(); //! it is a string, no methods!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
console.log(timeNew + ' newTime');
console.log(timeNew.getFullYear);
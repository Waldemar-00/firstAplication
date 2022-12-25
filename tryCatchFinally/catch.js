try {
    console.log('Start try');
    console.log(STRING);
    console.log('after catch');
}catch(error) {
    console.log(error.name);//! it has not red color
    console.log(error.message);//! it has not red color
    console.log(error.stack);//! it has not red color
}finally {
    console.log('End process, and show message for user');
}
console.log('AFTER ALL CONSTRUCTION');
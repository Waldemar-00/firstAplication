function getValueAndSquareOfCube(edge) {
    if(isNaN(edge) || edge <= 0 || edge % 1 !== 0)return "При вычислении произошла ошибка";
    let  value = edge * edge * edge;
    let  square = 6 * edge * edge;
    let str = `Объем куба: ${value}, площадь всей поверхности: ${square}`;
    return  str;
}
console.log(getValueAndSquareOfCube(5));

function getNumberOfCoup(ticketNumber) {
    if(isNaN(ticketNumber) || ticketNumber < 0 || ticketNumber % 1 !== 0 )return "Ошибка. Проверьте правильность введенного номера места";
    else if(ticketNumber == 0 || ticketNumber > 36)return "Таких мест в вагоне не существует";
    const  coup = Math.ceil(ticketNumber / 4);
    return coup;
}
console.log(getNumberOfCoup(0));
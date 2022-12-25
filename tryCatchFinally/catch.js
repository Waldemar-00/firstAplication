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

console.log('______________________________________________');
class Error {
constructor(message) {
    this.message = message;
    this.name = "Error"; // (разные имена для разных встроенных классов ошибок)
    //this.stack = e.stack; // нестандартное свойство, но обычно поддерживается
}
}

class ValidationError extends Error {
    constructor(message) {
    super(message);
    this.name = "ValidationError";
    }
}

// Использование
function readUser(json) {
    let user = JSON.parse(json);

    if (!user.age) {
    throw new ValidationError("Нет поля: age");
    }
    if (!user.name) {
    throw new ValidationError("Нет поля: name");
    }

    return user;
}

// Рабочий пример с try..catch

try {
    let user = readUser('{ "age": 25, "name": "John" }');
    console.log(user);
} catch (err) {
    if (err instanceof ValidationError) {
    console.log("Некорректные данные: " + err.message); // Некорректные данные: Нет поля: name
    } else if (err instanceof SyntaxError) { // (*)
    console.log("JSON Ошибка Синтаксиса: " + err.message);
    } else {
    throw err; // неизвестная ошибка, пробросить исключение (**)
    }
}
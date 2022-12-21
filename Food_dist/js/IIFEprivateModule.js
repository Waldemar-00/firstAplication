const getMethod = function() {
    function _user() {
        return 'Alex Blood';//! module
    }
    return {
        method: function() {
            return _user();
        }
    };
}();

console.log(getMethod.method());

const number = 1;
(function() {
    const number = 3;
    console.log(number);
    console.log(number - 1);
}());
console.log(number);
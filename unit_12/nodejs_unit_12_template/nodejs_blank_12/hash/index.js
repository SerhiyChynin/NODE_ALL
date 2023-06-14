const arr = require('./config');
module.exports = function (a) {
    let string = '';
    for (let i = 0; i < a; i++) {
        string += arr[Math.round(Math.random() * (arr.length - 1))];
    }
    return string;
}
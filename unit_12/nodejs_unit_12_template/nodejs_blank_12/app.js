const config = require('./config');
const randomInt = require('./rand');
const config2 = require('./config2');
const indexArray = require('./indexArray');
// console.log(config);
// console.log(randomInt(0,5));
// console.log(config2);
let a = [
    { id : 24, name : 'Test', age : 23},
    { id : 34, name : 'User', age : 33}
];
console.log(indexArray(a, 'name'))



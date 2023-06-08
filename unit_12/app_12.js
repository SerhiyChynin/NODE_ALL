const config = require('./config');
const config2 = require('./config2');
const f = require('./fun');
const f2 = require('./f2');

console.log('node =============== ok');
console.log(config)
console.log(config2)
console.log(f(2,3));
console.log(config.f(6,4));
console.log(f2(7));

// npm init - создается описание проекта package.json со всеми зависимостями, потом npm install и все установится
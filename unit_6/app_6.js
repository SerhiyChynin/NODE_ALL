const fs = require('fs'); //модуль файловой системы, подключаем, обязателен для чтения файлов
const path = require('path'); //разширение для работы с путями
//task 1 - read a file;
//way 1 : асинхронный идет дальше выводит когда прочитает
// fs.readFile('t2.txt', 'utf-8', (err, data)=>{
//     console.log(data)
// }) //параметры: путь, кодировка файла, асинк функция будет получать и обрабатывать рез
//way 2 : синхронный ждем пока прочитает потом идем дальше
// let text = fs.readFileSync('t1.txt', 'utf-8')
// console.log(text);
// console.log('==================');

//read directore

fs.readdir('one', (err, data) => {
    console.log(data)
    data.forEach(file => {
        console.log(file + '\t\t' + path.extname(file) + '\t\t ' + fs.statSync('one/' + file).size + ' b')
    })
})

fs.writeFile('one/newfile.txt', 'better head home and working on it now', (err) => {
    if(err) return console.log(err);
})

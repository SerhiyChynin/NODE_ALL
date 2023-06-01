const fs = require('fs');
const path = require('path');
const arg = process.argv;
// Task 1
// Напишите функцию t1, которая  выводит содержимое файла t1.txt в папке home6. Помимо вывода функци должна возвращать данное значение.


function t1() {
    let data = fs.readFileSync('unit_06/home6/t1.txt', 'utf-8');
    return data;
}

console.log(t1());


// Task 2.

// Напишите функцию t2, которая  выводит содержимое файла указанного в параметрах файла. Помимо вывода функци должна возвращать данное значение.


function t2(filePath) {
    let data = fs.readFileSync(filePath, 'utf-8');
    return data;
}

let filePath = 'unit_06/home6/t1.txt';
console.log(t2(filePath));


// Task 3.
// Напишите функцию t3, которая  выводит список файлов указанной в параметре папки ( в виде массива ) и возвращает данный массив.

function t3(folderName) {
    let arr = [];
    let data = fs.readdirSync(folderName, 'utf-8');
    data.forEach(file => {
        arr.push(file)

    })
    return arr;
}

console.log(t3('unit_06/'));


// Task 4

// Напишите функцию t4 которая принимает имя файла и возвращает его размер в килобайтах (только число)

function t4(filepath) {
    let s = fs.statSync(filepath).size;
    return s / 1000;
}

console.log(t4('unit_06/home6/t1.txt'));


// Task 5
// Напишите функцию t5, которая принимает параметр число ( например размер) и возвращает строку по правилам
//если число от 0 до 99 то просто возвращает эту строку и добавляет B
//    512 -> 512B
// если число от 1000 до 999 999 то делит на 1000 и добавляет kB
// 30000 -> 30кB
// если число от 1000000 и выше то делит на 1000000 и добавляет MB
// 13000000 -> 13MB

function t5(a) {
    if (a >= 0 && a <= 999) {
        return a + 'B';
    } else if (a >= 1000 && a <= 999999) {
        return (a / 1000) + 'kB';
    } else if (a >= 1000000) {
        return (a / 1000000) + 'MB';
    }
}

console.log(t5(345));


// Task 6
// Напишите функцию t6 которая выводит содержимое папки. В одной строке выводится имя файла, пробел его размер ( используем t5) перенос строки.

function t6(exFolder) {
    let out = '';
    let data = fs.readdirSync(exFolder, 'utf-8');
    data.forEach(file => {
        console.log(file + ' ' + t5(fs.statSync(exFolder + file).size) + '\n');
    })
}

t6('unit_06/');


// Task 7
// Напишите функцию t7, которая принимает путь к файлу и выводит и возвращает его расширение. 

function t7(exPath) {
    return path.extname(exPath);
}

console.log(t7('unit_06/home6/t1.txt'));

// Task 8
// Напишите функцию t8 принимает имя папки и выводит и возвращает суммарный размер файлов в ней.

function t8(exPath) {
    let res = 0;
    let data = fs.readdirSync(exPath, 'utf-8');
    res = data.reduce((acc, item) => {
        return acc = fs.statSync(exPath + acc).size + fs.statSync(exPath + item).size;
    })
    return res;

}

console.log(t8('unit_06/'));


// Task 9
// Создайте функцию t9, которая принимает два параметра - имя папки и файла и проверяет есть ли данный файл в папке. Функция должна возвращать true или false.

function t9(folder, file) {
    let data = fs.readdirSync(folder, 'utf-8');
    if (data.includes(file)) {
        return true;
    } else {
        return false;
    }

}

console.log(t9('unit_06/home6/', 't1.txt'));


// Task 10
// Создайте функцию t10, которая принимает имя файла и которая возвращает false если файла нет в текущей папке или его размер равен нулю и размер файла если он существует и его размер больше нуля.

function t10(a) {
    let data = fs.readdirSync('unit_06/', 'utf-8');
    if (data.includes(a) && fs.statSync('unit_06/' + a).size > 0) {
        return fs.statSync('unit_06/' + a).size;
    } else {
        return false;
    }
}

console.log(t10('app_06.js'));


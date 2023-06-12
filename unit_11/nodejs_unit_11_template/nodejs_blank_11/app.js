const mysql = require('mysql2/promise');
const config = require('./config');


//Task 1.
// Для работы с базой данных используется mysql2.Все действия в задачах производим над таблицей user(таблицу создайте на основе файла node_unit_11.sql).Настройки подключения к базе данных должны быть вынесены в отдельный файл config.js и require в данный файл.

// Напишите функцию f1(все функции в задании async), которая возвращает age пользователя с email = iv@ua

async function f1() {
    const conn = await mysql.createConnection(config);
    const [rows, field] = await conn.execute('select * from user');
    rows.map(item => {
        if (item.email == 'iv@ua') {
            console.log(item.age);
            return item.age
        }
    })
    conn.end();
}

// f1() //- для проверки расскоментируйте, потом верните комментарий на место.

// Task 2
// Создайте функцию f2, которая возвращает coin (число) пользователя с возрастом 46.

async function f2() {
    const conn = await mysql.createConnection(config);
    const [rows, field] = await conn.execute('select * from user');
    rows.map(item => {
        if (item.age == 46) {
            console.log(item.coin)
            return item.coin;
        }
    })
    conn.end();
}

// f2() //- для проверки расскоментируйте, потом верните комментарий на место.


// Task 3
// Создайте функцию f3, которая возвращает true если у пользователя с lastname Petr монет больше 15 или false если меньше или равно.

async function f3() {
    const conn = await mysql.createConnection(config);
    const [rows, fields] = await conn.execute('select * from user');
    rows.map(item => {
        if (item.lastname == 'Petr') {
            if (item.coin > 15) {
                console.log(true);
                return true
            } else {
                console.log(false);
                return false;
            }
        }
    })
    conn.end();
}

// f3() //- для проверки расскоментируйте, потом верните комментарий на место.


// Task 4
// Создайте функцию f4, которая возвращает массив [ ] где нулевой элемент это количество монет у пользователя с емейл = iv@ua, а первый элемент - емейл пользователя с firstname berg. Задачу решать двумя последовательными запросами.

async function f4() {
    let arr = [];
    const conn = await mysql.createConnection(config);
    const [rows, field] = await conn.execute('select * from user');
    rows.map(item => {
        if (item.email == 'iv@ua') {
            arr.push(item.coin);
        }
    })
    await conn.execute('select * from user');
    rows.map(item => {
        if (item.firstname == 'berg') {
            arr.push(item.email);
        }
    })
    conn.end();
    console.log(arr);
    return arr;
}

// f4() //- для проверки расскоментируйте, потом верните комментарий на место.


// Task 5
// Создайте функцию f5, которая возвращает массив строку состоящую количества монет у кажого пользователя через пробел. Порядок - по id (возрастание). Т.е. я ожидаю от вас строку 4 8 12 56 43. Задача выполняется выборкой и последующей обработкой массива.

async function f5() {
    let arr = [];
    const conn = await mysql.createConnection(config);
    const [rows, field] = await conn.execute('select * from user');
    rows.map(item => {
        arr.push(item.coin);
    })
    conn.end()
    console.log(arr.join(' '));
    return arr.join(' ');
}

//f5() //- для проверки расскоментируйте, потом верните комментарий на место.


// Task 6
// Создайте функцию f6, которая первым запросом получает firstname пользователя с email = al@em, а вторым запросом записывает это firstname для пользователя с lastname Bro. Также функция должна возвращать данное firstname.

async function f6() {
    let name;
    let name2;
    const conn = await mysql.createConnection(config);
    const [rows, field] = await conn.execute('select * from user');
    rows.map(item => {
        if(item.email == 'al@em'){
        name = item.firstname;
            }  else if(item.lastname =='Bro'){
            name2 = item.lastname;
        }
    });
    await conn.execute('update user set firstname="'+name+'"where lastname ="'+name2+'"');
    conn.end();
    return name;
}

// f6() //- для проверки расскоментируйте, потом верните комментарий на место.
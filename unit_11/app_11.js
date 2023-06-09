const mysql = require('mysql2/promise');
const config = require('./config');

async function main() {
    const conn = await mysql.createConnection(config);
    const [rows, field] = await conn.execute('select * from user where id = 1');
    // console.log(rows[0].firstname);
    await conn.execute('update user set firstname="'+rows[0].firstname+'" where id=2');
    conn.end();
    return rows;
}

async function f() {
    let a = await main();
    console.log(a)
}
f();

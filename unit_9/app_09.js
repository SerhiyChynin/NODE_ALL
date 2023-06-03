const mysql = require('mysql');

//конфигуряция пакета

const conn = mysql.createConnection({
    host: "localhost", //127.0.0.1
    user: "root",
    database: "node_test",
    password: ""
});

conn.connect(err => {
    if (err) {
        console.log(err);
        return err;
    } else {
        console.log('DATABASE ------- Ok!');
    }
});

let query = 'SELECT * FROM user';

conn.query(query, (err, res, field) => {
    console.log(err);
    console.log(res);
    console.log(res[1]['email']);
    // console.log(field);
});

conn.end(err => {
    if (err) {
        console.log(err);
        return err;
    } else {
        console.log('DATABASE ------- CLOSE!');
    }
});



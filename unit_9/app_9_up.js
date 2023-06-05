const http = require('http');
const url = require('url');
const mysql = require('mysql');

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "node_test",
    password: ""
});

conn.connect(err => {
    if(err){
        console.log(err);
        return err
    }
    else {
        console.log('DB - Work!');
    }
});



function f2(req, res) {
    let urlReq = url.parse(req.url, true);
    let email = urlReq.query.email;
    console.log(email);

    let query = 'SELECT * FROM user where email LIKE "%' + email + '%"';
    console.log(query);

    // тут важно не перепутать res - уже есть в функции как аргумент
    conn.query(query, (err, result) => {
        result  = result.map(item => item.firstname);
        res.end(JSON.stringify(result));
    });
}


http.createServer((req, res) => {
    if(req.method == 'GET'){
        let urlReq = url.parse(req.url, true);
        let task = urlReq.query.task;
        if(task == 2){
            // res.end('array');
            console.log('task2');
            f2(req, res);
        }

    }
}).listen(3000);


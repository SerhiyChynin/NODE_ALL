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

let query = 'SELECT * FROM user';

conn.query(query, (err, res) => {
    // console.log(res);
    // res.end(res.map(name => JSON.stringify(name.firstname)));
    console.log(res.map(name => JSON.stringify(name.firstname)));

})


http.createServer((req, res) => {
    if(req.method == 'GET'){
        let urlReq = url.parse(req.url, true);
        let task = urlReq.query.task;
        let email = urlReq.query.email;
        console.log(email)
        if(task == 2){
            // res.end('array');
            console.log('task2')
        }

    }
    res.end('work');
}).listen(3000);


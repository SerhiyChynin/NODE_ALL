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
    if (err) {
        console.log(err);
        return err
    } else {
        console.log('DB - Work!');
    }
});


function f2(req, res) {
    let urlReq = url.parse(req.url, true);
    let email = urlReq.query.email;

    let query = 'SELECT * FROM user where email LIKE "%' + email + '%"';

    // тут важно не перепутать res - уже есть в функции как аргумент
    conn.query(query, (err, result) => {
        result = result.map(item => item.firstname);
        res.end(JSON.stringify(result));
    });
}

function f3(req, res) {
    let query = 'SELECT * FROM user';
    conn.query(query, (err, result) => {
        result = result.map(item => item.email);
        res.end(JSON.stringify(result));
    });
};

function f4(req, res) {
    let urlReq = url.parse(req.url, true);
    let email = urlReq.query.email;

    let query = 'SELECT * FROM user';

    conn.query(query, (err, result) => {
        resEm = result.map(item => item.email);
        if (resEm.includes(email)) {
            for (let key in result) {
                if (result[key].email == email) {
                    res.end(JSON.stringify(result[key].id));
                }
            }
        } else {
            res.end('0');
        }
    })
}

function f5(req, res) {
    let query = 'SELECT * FROM user';
    let id = [];
    conn.query(query, (err, result) => {
            let mail = result.map(item => item.email);
            result.map(item => {
                let RES = mail.filter(item => item.includes('k'));
                if (RES.includes(item.email)) {
                    id.push(item.id);
                }
            })
            res.end(JSON.stringify(id))
        }
    )
}


http.createServer((req, res) => {
    if (req.method == 'GET') {
        let urlReq = url.parse(req.url, true);
        let task = urlReq.query.task;
        if (task == 2) {
            f2(req, res);
        } else if (task == 3) {
            f3(req, res);
        } else if (task == 4) {
            f4(req, res);
        } else if (task == 5) {
            f5(req, res);
        }
    }
}).listen(3000);


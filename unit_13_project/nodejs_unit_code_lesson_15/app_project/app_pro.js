const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
    console.log(req);
    if (req.url == '/') {
        sendRes('index.html', 'text/html', res);
    } else if (/\/uploads\/[^\/]+$/.test(req.url) && req.method == 'POST') {

    } else {

    }
}).listen(3000, () => {
    console.log('server start 3000');
});

function sendRes(url, contentType, res) {
    let file = path.join(__dirname+'/static/', url);
    fs.readFile(file, (err, content) => {
        if (err) {
            res.writeHead(404);
            res.write('file not found');
            res.end();
            console.log(`error 404 ${file}`);
        } else {
            res.writeHead(200, {'Content-Type': contentType});
            res.write(content);
            res.end();
            console.log(200 `${file}`);
        }
    })
}
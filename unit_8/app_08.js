const http = require('http');
const url = require('url');
const {parse} = require('querystring');


http.createServer((req, res) => { //создаем сервер
    console.log('server work');
    if (req.method == 'GET') {
//* Case 1 - GET - отправляем на сервер, получить и обработать;
        console.log(req.method); //!!!!
        let urlRequest = url.parse(req.url, true);
        // console.log(urlRequest);
        console.log(urlRequest.query.test);  // GET Params !!!!
        if (urlRequest.query.test % 2 == 0) {
            res.end('even');
        } else {
            res.end('odd');
        }
    } else {
//* Case 2 - POST - отправляем на сервер, получить и обработать;
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            console.log(body);
            let params = parse(body);
            console.log(params);
            console.log(params.ready);
            res.end('ok');
        });

    }
}).listen(3000);


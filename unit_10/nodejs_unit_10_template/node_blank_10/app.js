const http = require('http');
const url = require('url');

http.createServer(function (req, res) {
    console.log('Server Work!');
    let urlParams = url.parse(req.url, true);
    // console.log(urlParams)
    if (req.method == 'GET')    {
        switch (urlParams.pathname) {
            case "/main":
                main(req, res);
                break;
            case "/about":
                about(req, res);
                break;
            case "/cat":
                cat(req, res);
                break;
            default:
                page404(req, res);
                break;
        }
    }
    else {
        page404(req, res);
    }
}).listen(3000);

function main(req, res) {
    res.end('main');
}

function about(req, res) {
    res.end('about');

}

function cat(req, res) {
    if (req.url == "/cat?lang=ru") {
        res.end('ru');
    } else if (req.url == "/cat?lang=en" || req.url == "/cat") {
        res.end('en');
    }
}

function page404(req, res) {
    res.end('404')
}
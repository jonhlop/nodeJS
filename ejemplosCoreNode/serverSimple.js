const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    res.end('Hola Mundo Server!');
});

server.listen(3000);
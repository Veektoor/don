const http = require('http');
const fs = require('fs');

// Use process.env.PORT to get the port assigned by Heroku
const port = process.env.PORT || 8000;

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        fs.readFile(__dirname + '/index.html', (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end("error handling the page")
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    }
});

server.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});

const http = require('http');
const fs = require('fs').promises;

const contacts = [
    {
        nom: 'NORIS',
        prenom: 'Chuck'
    },
    {
        nom: 'DOE',
        prenom: 'John'
    }
];

const requestListener = function(req, res) {
    if (req.url === '/contacts') {
        res.setHeader("Content-type", "application/json");
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.end(JSON.stringify(contacts));
    } else {
        fs.readFile('index.html')
            .then((contenu) => {
                res.setHeader("Content-type", "text/html");
                res.writeHead(200);
                res.end(contenu);
            })
            .catch((err) => {
                res.writeHead(500);
                res.end(err);
            });
    }
}

const server = http.createServer(requestListener);

server.listen(8088);

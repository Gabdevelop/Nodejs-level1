const http = require('http');
const colors = require('colors');

const handlServer = function(req, res){
    res.writeHead(200, { 'content-type': 'text/html'});
    res.write('<h1>Hola klk</h1>');
    res.end();
}

const server = http.createServer(handlServer);
server.listen(3000, function () {
    console.log('Server on port 3000'.blue)
});

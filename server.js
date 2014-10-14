var http = require('http');

module.exports = function(port, hostname) {
    http.createServer(function (req, res) {
        res.writeHead(301, {"location" : "https://dtudury.github.io/cryptopotamus.com/"});
        res.end();
    }).listen(port, hostname);
    console.log('cryptopotamus.com running at http://%s:%s/', hostname, port);
}

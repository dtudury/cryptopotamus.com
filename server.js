var http = require('http');
var fs = require('fs');
var path = require('path');

module.exports = function(port, hostname) {
    fs.readFile(path.join(__dirname, 'index.html'), function (err, file) {
        http.createServer(function (req, res) {
            if (req.url.match(/^\/(index\.html?)?$/)) {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(file);
            } else {
                res.writeHead(404);
                res.end(http.STATUS_CODES[404]);
            }
        }).listen(port, hostname);
        console.log('cryptopotamus.com running at http://%s:%s/', hostname, port);
    });
}

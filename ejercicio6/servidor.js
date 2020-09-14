// Imports
var http = require('http');
var url = require('url');
var fs = require('fs');

/**
 * Variable que representa la url actual
 */
var url_actual;

exports.runServer = function run() {
    http.createServer(function (request, response) {
        response.writeHead(200, {
            'Content-Type': 'text/html'
        });

        fs.readFile('index.html', function (err, content) {
            response.write(content);
            response.end();
        });
    }).listen(8081);
}

exports.darUrl = function darUrl() {
    return url_actual;
}


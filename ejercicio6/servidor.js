// Imports
var http = require('http');
var url = require('url');
var fs = require('fs');

/**
 * Metodo que crea el servidor y lee el path, cambiando activamente el html correspondiente.
 */
exports.runServer = function run() {
    http.createServer(function (req, res) {
        // Muestra el index.html
        if (req.url == '/index.html' || req.url == '/') {
            fs.readFile('./index.html', function (err, data) {
                res.end(data);
            });
        }
        // Muestra el proveedores.html
        else if (req.url == "/api/proveedores") {
            fs.readFile('./proveedores.html', function (err, data) {
                res.end(data);
            });
        }
        // Muestra el clientes.html
        else if (req.url == "/api/clientes") {
            fs.readFile('./clientes.html', function (err, data) {
                res.end(data);
            });
        }
    }).listen(8081);
}


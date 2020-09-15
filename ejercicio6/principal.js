// Importaciones
const axios = require('axios');
const fs = require('fs');
const parse = require('node-html-parser').parse;

/**
 * Metodo que procesa los proveedores y clientes por axios por promesas.
 * @param {*} url_proveedores: url de la informacion JSON de los proveedores 
 * @param {*} url_clientes: url de la informacion JSON de los clientes 
 */
exports.procesarJSON = async function makeGetRequest(url_actual, tipo) {
    let res = await axios.get(url_actual);
    let data = res.data;

    if (tipo === "proveedor") {
        // lee el html de proveedor y escribe por fs los proveedores encontrados en el JSON
        fs.readFile('proveedores.html', 'utf8', (err, html) => {
            if (err) {
                throw err;
            }
            const root = parse(html);
            const body = root.querySelector('#tabla_proveedores');
            for (i in data) {
                var proveedor_actual = data[i];
                var id_proveedor = proveedor_actual["idproveedor"];
                var nombre_compania = proveedor_actual["nombrecompania"];
                var nombre_contacto = proveedor_actual["nombrecontacto"];
                // NOTA: los espacios en el string del append están dados por la nueva indentacion del html
                // se hace para que quede el codigo bien presentado.
                body.appendChild('<tr> \n                <td>' + id_proveedor + '</td>\n                <td>' + nombre_compania + '</td>\n                <td>' + nombre_contacto + '</td>\n             </tr>\n             ');
            }
            // Escribe el nuevo archivo en el html
            fs.writeFile("./proveedores.html", root.toString(), function (err) {
                if (err) {
                    console.log(err);
                }
            });
        });
    }
    // lee el html de clientes y escribe por fs los clientes encontrados en el JSON
    else if (tipo == "cliente") {
        fs.readFile('clientes.html', 'utf8', (err, html) => {
            if (err) {
                throw err;
            }
            const root = parse(html);
            const body = root.querySelector('#tabla_clientes');
            for (i in data) {
                var cliente_actual = data[i];
                var id_cliente = cliente_actual["idcliente"];
                var nombre_compania = cliente_actual["nombrecompania"];
                var nombre_contacto = cliente_actual["nombrecontacto"];
                // NOTA: los espacios en el string del append están dados por la nueva indentacion del html
                // se hace para que quede el codigo bien presentado.
                body.appendChild('<tr> \n                <td>' + id_cliente + '</td>\n                <td>' + nombre_compania + '</td>\n                <td>' + nombre_contacto + '</td>\n             </tr>\n             ');
            }
            // Escribe el nuevo archivo en el html
            fs.writeFile("./clientes.html", root.toString(), function (err) {
                if (err) {
                    console.log(err);
                }
            });
        });
    }
}


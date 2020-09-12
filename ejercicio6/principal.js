// Imports
const axios = require('axios');

/**
 * Metodo que procesa los proveedores y clientes por axios por promesas.
 * @param {*} url_proveedores: url de la informacion JSON de los proveedores 
 * @param {*} url_clientes: url de la informacion JSON de los clientes 
 */
exports.procesarJSON = async function makeGetRequest(url_actual, tipo) {
    let res = await axios.get(url_actual);
    let data = res.data;

    if (tipo === "proveedor") {

        for (i in data) {
            var proveedor_actual = data[i];
            var id_proveedor = proveedor_actual["idproveedor"];
            var nombre_compania = proveedor_actual["nombrecompania"];
            var nombre_contacto = proveedor_actual["nombrecontacto"];

            var nuevo_proveedor = new proveedor(id_proveedor, nombre_compania, nombre_contacto);

        }
    }
    else if (tipo == "cliente") {

    }
}


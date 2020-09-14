// Import de la clase principal.
const principal = require("./principal.js");
const servidor = require("./servidor.js");

/**
 * URL del ejercicio para los proveedores
 */
var url_proveedores = "https://gist.githubusercontent.com/josejbocanegra/d3b26f97573a823a9d0df4ec68fef45f/raw/66440575649e007a9770bcd480badcbbc6a41ba7/proveedores.json";
/***
 * URL del ejercicio para los clientes
 */
var url_clientes = "https://gist.githubusercontent.com/josejbocanegra/986182ce2dd3e6246adcf960f9cda061/raw/f013c156f37c34117c0d4ba9779b15d427fb8dcd/clientes.json";

/**
 * Metodo main que ejecuta en general el funcionamiento del programa
 */
function runApplication() {

    servidor.runServer();

    var url_solicitada = servidor.darUrl();
    console.log(url_solicitada);
    console.log("holi");

    //principal.procesarJSON(url_proveedores, "proveedor");
    //principal.procesarJSON(url_clientes, "clientes");
    //principal.procesarJSON(url_clientes, "cliente");
}


runApplication();
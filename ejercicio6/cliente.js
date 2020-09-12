/**
 * Clase que representa un cliente.
 */
class cliente {

    /**
     * Metodo constructor de la clase cliente
     * @param {*} id: identificador del cliente
     * @param {*} nombre_compania: nombre de la compañia del cliente actual
     * @param {*} nombre_contacto: nombre de contacto del cliente actual 
     */
    constructor(id, nombre_compania, nombre_contacto) {
        this.id = id;
        this.nombre_compania = nombre_compania;
        this.nombre_contacto = nombre_contacto;
    }
    /**
     * Retorna el ID del proveedor
     */
    get darId() {
        return this.id;
    }
    /**
     * Retorna el nombre de la compania
     */
    get darNombreCompania() {
        return this.nombre_compania;
    }
    /**
     * Retorna el nombre de contacto
     */
    get darNombreContacto() {
        return this.nombre_contacto;
    }
}
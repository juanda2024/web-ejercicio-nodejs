/**
 * Clase que representa un proveedor.
 */
class proveedor {

    /**
     * Metodo constructor de la clase proveedor
     * @param {*} id: identificador del proveedor
     * @param {*} nombre_compania: nombre de la compañia del proveedor actual
     * @param {*} nombre_contacto: nombre de contacto del proveedor actual 
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
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Articulo = void 0;
class Articulo {
    constructor(articulo_id = -1, nombre = '', precio = 0) {
        this.articulo_id = articulo_id;
        this.nombre = nombre;
        this.precio = precio;
    }
}
exports.Articulo = Articulo;

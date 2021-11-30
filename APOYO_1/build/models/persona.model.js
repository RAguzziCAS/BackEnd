"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    constructor(id = -1, nombreCompleto = '', edad = 0, altura = 0) {
        this.id = id;
        this.nombreCompleto = nombreCompleto;
        this.edad = edad;
        this.altura = altura;
    }
}
exports.Persona = Persona;

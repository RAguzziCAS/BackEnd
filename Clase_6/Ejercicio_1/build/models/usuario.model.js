"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
class Usuario {
    constructor(user_Id = '', name = '', password = '') {
        this.user_Id = user_Id;
        this.name = name;
        this.password = password;
    }
}
exports.Usuario = Usuario;

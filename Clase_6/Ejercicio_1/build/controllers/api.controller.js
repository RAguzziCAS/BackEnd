"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usuarios_data_1 = require("../data/usuarios.data");
class ApiController {
    Index(req, res) {
        res.send("Felicidades, usted esta dentro del api");
    }
    ListUsers(req, res) {
        res.json(usuarios_data_1.lista);
    }
}
const controlador = new ApiController();
exports.default = controlador;

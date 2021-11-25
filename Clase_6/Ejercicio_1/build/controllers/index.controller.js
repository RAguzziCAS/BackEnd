"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usuarios_data_1 = require("../data/usuarios.data");
class IndexController {
    Inicio(req, res) {
        res.send("Estas en el inicio, por favor dirigirse a la ruta /api");
    }
    Login(req, res) {
        let usuario = req.params.id;
        let password = req.params.pass;
        if (usuarios_data_1.lista.filter(x => x.user_Id == usuario && x.password == password).length !== 0) {
            res.send("Bienvenido, este es su token: {{ arjwt }}");
        }
        else {
            res.send(401);
        }
    }
}
const controlador = new IndexController();
exports.default = controlador;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndexRoutes = void 0;
const express_1 = require("express");
const index_controller_1 = require("../controllers/index.controller");
class IndexRoutes {
    constructor() {
        this.controlador = new index_controller_1.IndexController();
        this.rutas = express_1.Router();
        this.Configurar();
    }
    Configurar() {
        this.rutas.get('/', this.controlador.Index);
        this.rutas.get('/personas', this.controlador.ListaPersonas);
    }
}
exports.IndexRoutes = IndexRoutes;

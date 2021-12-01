"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const data_1 = __importDefault(require("../services/data"));
var router;
router = express_1.Router();
router.get('/personas/lista', Listar);
function Listar(req, res) {
    res.json(data_1.default);
}
router.get('/personas/lista/:id', ListarEspecifico);
function ListarEspecifico(req, res) {
    let id = parseInt(req.params.id);
    res.json(data_1.default.filter(x => x.id == id));
}
router.post('/personas/actualizar/:id/:name', Actualizar);
function Actualizar(req, res) {
    let id = parseInt(req.params.id);
    let nombre = req.params.name;
    let persona = data_1.default.find(x => x.id == id);
    if (persona) {
        persona.nombreCompleto = nombre;
    }
    res.send("Recibido");
}
exports.default = router;

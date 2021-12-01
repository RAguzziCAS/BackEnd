"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const data_1 = __importDefault(require("./data"));
var router = express_1.Router();
router.get('/lista', Lista);
function Lista(req, res) {
    res.json(data_1.default);
}
router.post('/crear', Crear);
function Crear(req, res) {
    let nueva = req.body;
    data_1.default.push(nueva);
    res.json({ response: "recibido" });
}
exports.default = router;

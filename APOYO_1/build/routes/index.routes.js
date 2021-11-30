"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_controller_1 = __importDefault(require("../controllers/index.controller"));
var router;
router = express_1.Router();
router.get('/personas/lista', index_controller_1.default.Listar);
router.get('/personas/listaEspecificas', index_controller_1.default.Listar);
router.get('/personas/listaMenoresEdad', index_controller_1.default.Listar);
exports.default = router;

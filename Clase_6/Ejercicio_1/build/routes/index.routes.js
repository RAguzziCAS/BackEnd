"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_controller_1 = __importDefault(require("../controllers/index.controller"));
class IndexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.ConfigurarRouter();
    }
    ConfigurarRouter() {
        this.router.get('/', index_controller_1.default.Inicio);
        this.router.post('/login/:id/:pass', index_controller_1.default.Login);
    }
}
const RUTAS = new IndexRoutes();
exports.default = RUTAS.router;

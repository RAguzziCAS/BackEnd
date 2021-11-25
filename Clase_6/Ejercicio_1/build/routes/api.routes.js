"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const api_controller_1 = __importDefault(require("../controllers/api.controller"));
class ApiRoutes {
    constructor() {
        this.router = express_1.Router();
        this.ConfigurarRouter();
    }
    ConfigurarRouter() {
        this.router.get('/', api_controller_1.default.Index);
        this.router.get('/users', api_controller_1.default.ListUsers);
    }
}
const RUTAS = new ApiRoutes();
exports.default = RUTAS.router;

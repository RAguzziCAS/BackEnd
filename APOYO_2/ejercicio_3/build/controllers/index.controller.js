"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = __importDefault(require("../services/data"));
class IndexController {
    Listar(req, res) {
        res.json(data_1.default);
    }
}
exports.default = new IndexController();

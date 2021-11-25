"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const index_routes_1 = require("../routes/index.routes");
class Server {
    constructor() {
        this.app = express_1.default();
        this.Configurar();
        this.Rutas();
    }
    Configurar() {
        this.app.set('port', 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
    }
    Rutas() {
        let indexRoutes = new index_routes_1.IndexRoutes();
        this.app.use('/api', indexRoutes.rutas);
    }
    Iniciar() {
        this.app.listen(this.app.get('port'), () => {
            console.log("Servidor inciado...");
        });
    }
}
exports.Server = Server;

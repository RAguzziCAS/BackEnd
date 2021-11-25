"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const index_routes_1 = __importDefault(require("./routes/index.routes"));
const api_routes_1 = __importDefault(require("./routes/api.routes"));
const api_middleware_1 = require("./services/api.middleware");
class Server {
    constructor() {
        this.application = express_1.default();
        this.Configurar();
        this.ImplementarRutas();
    }
    Configurar() {
        this.application.set('port', 3000);
        this.application.use(morgan_1.default('dev'));
        this.application.use(express_1.default.json());
    }
    ImplementarRutas() {
        this.application.use('/', index_routes_1.default);
        this.application.use('/api', api_middleware_1.VerificarAutorizacion);
        this.application.use('/api', api_routes_1.default);
    }
    Iniciar() {
        this.application.listen(this.application.get('port'), () => {
            console.log("Escuchando en el puerto 3000...");
        });
    }
}
let servidor = new Server();
servidor.Iniciar();

"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
var server = express_1.default();
server.use(express_1.default.json());
var apiRouter = express_1.Router();
var personasRouter = express_1.Router();
var mascotasRouter = express_1.Router();
var clientesRouter = express_1.Router();
function personaLista(req, res) {
    res.send("hola");
}
personasRouter.get('/lista', personaLista);
personasRouter.get('/crear');
personasRouter.get('/eliminar');
personasRouter.get('/actualizar');
mascotasRouter.get('/lista');
mascotasRouter.get('/crear');
mascotasRouter.get('/eliminar');
mascotasRouter.get('/actualizar');
clientesRouter.get('/lista');
clientesRouter.get('/crear');
clientesRouter.get('/eliminar');
clientesRouter.get('/actualizar');
apiRouter.use('/personas', personasRouter);
apiRouter.use('/mascotas', mascotasRouter);
apiRouter.use('/clientes', clientesRouter);
server.use('/api', apiRouter);
server.listen(3000, () => {
    console.log("Ejecutando");
});

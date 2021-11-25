"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificarAutorizacion = void 0;
function VerificarAutorizacion(req, res, next) {
    if (req.headers['token'] === 'arjwt') {
        next();
    }
    else {
        res.send(401);
    }
}
exports.VerificarAutorizacion = VerificarAutorizacion;

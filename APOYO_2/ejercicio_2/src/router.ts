import { Router, Request, Response } from "express";
import lista from './data'
import { Materia } from "./materia.model";

var router = Router();

router.get('/lista', Lista);
function Lista(req: Request, res: Response) {
    res.json(lista);
}

router.post('/crear', Crear);
function Crear(req: Request, res: Response) {

    let nueva: Materia = req.body;
    lista.push(nueva);
    res.json({ response: "recibido" })
}

export default router;

import { Router,Request,Response } from "express";
import lista from '../services/data'
var router:Router;

router = Router();

router.get('/personas/lista',Listar)
function Listar(req : Request,res :Response) {
    res.json(lista)
}

router.get('/personas/lista/:id',ListarEspecifico)
function ListarEspecifico(req : Request,res :Response) {
    let id = parseInt(req.params.id);
    res.json(lista.filter(x=>x.id == id))
}

router.post('/personas/actualizar/:id/:name',Actualizar)
function Actualizar(req : Request,res :Response) {
    let id = parseInt(req.params.id);
    let nombre = req.params.name;

    let persona = lista.find(x=>x.id ==id);
    if(persona){
        persona.nombreCompleto = nombre;
    }

    res.send("Recibido")
}




export default router;
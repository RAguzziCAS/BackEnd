import { Router } from "express";
import controlador from "../controllers/index.controller";

var router:Router;

router = Router();

router.get('/personas/lista',controlador.Listar)
router.get('/personas/listaEspecificas',controlador.Listar)
router.get('/personas/listaMenoresEdad',controlador.Listar)

export default router;
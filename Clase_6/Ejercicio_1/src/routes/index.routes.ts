import { Router } from "express";

import controlador from "../controllers/index.controller";

class IndexRoutes{
    router : Router;
    constructor(){
        this.router = Router();
        this.ConfigurarRouter();
    }
    ConfigurarRouter(){
        this.router.get('/',controlador.Inicio);
        this.router.post('/login/:id/:pass',controlador.Login);
    }
}

const RUTAS = new IndexRoutes();
export default RUTAS.router;












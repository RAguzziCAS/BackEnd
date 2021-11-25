import { Router } from "express";

import controller from '../controllers/api.controller'

class ApiRoutes{
    router:Router;
    constructor(){
        this.router = Router();
        this.ConfigurarRouter();
    }
    ConfigurarRouter(){
        this.router.get('/',controller.Index);
        this.router.get('/users',controller.ListUsers);
    }
}

const RUTAS = new ApiRoutes();
export default RUTAS.router;
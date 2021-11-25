import { Router } from 'express'
import { IndexController } from '../controllers/index.controller';

export class IndexRoutes {

    public controlador : IndexController;
    public rutas: Router;

    constructor() {
        this.controlador= new IndexController();
        this.rutas = Router();
        this.Configurar();
    }

    Configurar(){
        this.rutas.get('/',this.controlador.Index);
        this.rutas.get('/personas',this.controlador.ListaPersonas);
    }
}
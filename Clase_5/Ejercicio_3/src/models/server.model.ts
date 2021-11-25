import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';


import { IndexRoutes } from '../routes/index.routes';

export class Server{

    app : Application;

    constructor(){
        this.app = express();
        this.Configurar();
        this.Rutas();
    }

    Configurar(){
        this.app.set('port',3000);
        this.app.use(morgan('dev'))
        this.app.use(cors());
        this.app.use(express.json());
    }

    Rutas(){
        let indexRoutes = new IndexRoutes();
        this.app.use('/api',indexRoutes.rutas);
    }

    Iniciar(){
        this.app.listen(this.app.get('port'),()=>{
            console.log("Servidor inciado...");
        })
    }
}
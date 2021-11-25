import express, { Application } from 'express'
import morgan from 'morgan'
import cors from 'cors'

import indexRoutes from './routes/index.routes';
import apiRoutes from './routes/api.routes';

import { VerificarAutorizacion } from './services/api.middleware';

class Server{

    application : Application;

    constructor(){
        this.application = express();
        this.Configurar();
        this.ImplementarRutas();
    }

    Configurar(){
        this.application.set('port',3000);
        this.application.use(morgan('dev'));
        this.application.use(express.json());
    }

    ImplementarRutas(){
        this.application.use('/',indexRoutes);

        this.application.use('/api',VerificarAutorizacion);
        this.application.use('/api',apiRoutes);
    }

    Iniciar(){
        this.application.listen(this.application.get('port'),()=>{
            console.log("Escuchando en el puerto 3000...");
        });
    }
}

let servidor = new Server();
servidor.Iniciar();






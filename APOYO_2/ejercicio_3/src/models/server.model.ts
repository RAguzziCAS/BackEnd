import express, { Application } from 'express'
import morgan from 'morgan'
import cors from 'cors'

import indexRouter from '../controllers/api.controller'

export class Server{

    app:Application;

    constructor(){
        this.app = express();
        this.Configuration();
        this.SetRouters();
    }

    Configuration(){
        this.app.set('port',3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
    }

    SetRouters(){
        this.app.use('/api',indexRouter);
    }

    Start(){
        this.app.listen(this.app.get('port'),()=>{
            console.log("Esta escuchando en el puerto 3000")
        })
    }

}
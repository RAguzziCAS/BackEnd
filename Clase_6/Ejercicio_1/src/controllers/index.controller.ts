import {Request, Response} from 'express';

import { lista } from '../data/usuarios.data';

class IndexController {
    public Inicio(req: Request, res: Response) {
        res.send("Estas en el inicio, por favor dirigirse a la ruta /api")
    }

    public Login(req: Request, res: Response) {
        
        let usuario = req.params.id;
        let password = req.params.pass;

        if(lista.filter(x=>x.user_Id == usuario && x.password == password).length!==0){
            res.send("Bienvenido, este es su token: {{ arjwt }}")
        }else{
            res.send(401);
        }

    }
}

const controlador = new IndexController();
export default controlador;








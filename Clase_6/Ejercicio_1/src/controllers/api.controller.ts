import { Request, Response } from 'express'

import { lista } from '../data/usuarios.data';

class ApiController {

    public Index(req: Request, res: Response) {
        res.send("Felicidades, usted esta dentro del api")
    }

    public ListUsers(req: Request, res: Response) {
        res.json(lista);
    }
}

const controlador = new ApiController();
export default controlador;

import {Request,Response} from 'express'
import lista from '../services/data'

class IndexController{

    public Listar(req : Request,res :Response) {
        res.json(lista)
    }

}

export default new IndexController();

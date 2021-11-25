import {Request,Response,NextFunction} from 'express'

export function VerificarAutorizacion(req : Request,res :Response,next :NextFunction){

    if(req.headers['token'] === 'arjwt'){
        next();
    }else{
        res.send(401);
    }

}
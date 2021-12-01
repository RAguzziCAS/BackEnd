import express,{Router, Request,Response} from 'express'

var server = express();

server.use(express.json());

var apiRouter = Router();
var personasRouter = Router();
var mascotasRouter = Router();
var clientesRouter = Router();

function personaLista(req:Request,res:Response){
    res.send("hola")
}

personasRouter.get('/lista',personaLista);
personasRouter.get('/crear');
personasRouter.get('/eliminar');
personasRouter.get('/actualizar');

mascotasRouter.get('/lista');
mascotasRouter.get('/crear');
mascotasRouter.get('/eliminar');
mascotasRouter.get('/actualizar');

clientesRouter.get('/lista');
clientesRouter.get('/crear');
clientesRouter.get('/eliminar');
clientesRouter.get('/actualizar');

apiRouter.use('/personas',personasRouter);
apiRouter.use('/mascotas',mascotasRouter);
apiRouter.use('/clientes',clientesRouter);

server.use('/api',apiRouter);

server.listen(3000,()=>{
    console.log("Ejecutando");
})




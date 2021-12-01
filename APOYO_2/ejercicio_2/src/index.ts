import express from 'express'
import router from './router'

var server = express();

server.use(express.json());
server.use('/api',router);

server.listen(3000,()=>{
    console.log("Escuchando...");
})

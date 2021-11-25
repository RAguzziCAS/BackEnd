var express = require('express');
var morgan = require('morgan')
var server = express();

server.use(morgan('dev'));

server.get('/',(req,res)=>{
    res.send("Hola a todos")
})

server.get('/juegos',(req,res)=>{
    res.send("Has entrado a juegos")
})

server.listen(3000,()=>{
    console.log("Servidor iniciado")
});
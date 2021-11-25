const express = require('express');
const path = require('path')

var server = express();

server.set('port',3000);

server.get('/',(req,res)=>{
    res.set('Content-Type','text/html');
    res.sendFile(path.join(__dirname,'./views/index.html'));
});

server.get('/saludar',(req,res)=>{
    res.send("Hola muy buenos dias")
})

server.post('/:id',(req,res)=>{
    console.log(req.params.id);
    res.send("Se recibio el id " + req.params.id);
});

server.listen(server.get('port'),()=>{
    console.log("El servidor esta escuchando en el puerto 3000");
});




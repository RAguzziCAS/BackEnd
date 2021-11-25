const constantes = require('./config/constantes.js');
const util = require("./utils/validation.js")


let promesa = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Ya me ejecute!!!");
        resolve(true);
    },3000);
})

promesa.then((result)=>{
    console.log("Esto sucede despues de la promesa")
});

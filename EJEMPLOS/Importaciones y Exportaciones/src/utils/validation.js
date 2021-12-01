
const input = require('prompt-sync')();

function RequestNumber(texto){

    let num=0;

    do{
        num = parseFloat(input(texto));
        if(isNaN(num)){
            console.log("Por favor digite un valor numerico");
            console.log();
        }
    }while(isNaN(num));

    return num;

}

function RequestText(indicacion){
    let text='';

    do{
        text = input(indicacion);
        if(text.trim() == ""){
            console.log("Por favor no deje espacios vacios");
            console.log();
        }
    }while(text.trim() == "");

    return text;
}

/* tabla = [
    [1,2,3,4,5], //mixta
    [2,4,6,8,10],//par
    [1,3,5,7,9], //impar
    [2,4,6,8,10],//par
    [1,3,5,7,9]//impar
]
console.table(tabla.filter( x => x.filter( y => y %2!=0).length == x.length)); */

module.exports = {
    RequestNumber,
    RequestText
}

const input = require('prompt-sync')();

function Saludar(nombre){

    console.log("Hola",nombre);

}

function Sumar(lista){
    let sum=0;
    for(let num of lista){
        sum += num;
    }
    return sum;
}

const TodoSalioBien = function(nombre,lista){
    console.log("Felicidades " + nombre);
    console.log("Esta es tu lista: " + lista);
}

const AlgoSalioMal = function(nombre){
    console.log("Lo lamentamos  " + nombre + " ha ocurrido un error");
    console.log("Error, digite un valor numerico");
}

function SolicitarNumeros(Bien,Mal){
    let lista = [];
    let nombre = input("Digite su nombre: ");
    do{
        let num=0;
        do{
            num = parseInt(input("Digite un numero: "));
            if(isNaN(num)){
                Mal(nombre);
            }
        }while(isNaN(num));
        lista.push(num);
    }while(lista.length<5);
    Bien(nombre, lista);
}

SolicitarNumeros(TodoSalioBien,AlgoSalioMal);


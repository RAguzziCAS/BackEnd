
//ANONIMA
var persona = {

    cedula: "118640285",
    nombre: "Robert",
    apellido: "Amador",

    Presentarse(){
        console.log("Hola muy buenos dias");
        console.log("Mi nombre es: ",this.nombre);
    },

    AgregarDireccion(){
        this.direccion = "Aserri"
    }
}

class Persona{
    constructor(nombre,altura,edad){
        this.nombre = nombre;
        this.altura = altura;
        this.edad = edad;
    }

    DatosPersonales(){
        console.log(this.nombre,"->",this.altura,"->",this.edad);
    }
}

let nuevo = new Persona("Robert",1.75,18);
let nuevo2 = new Persona("Juan",1.95,45,45);

nuevo.DatosPersonales();
nuevo2.DatosPersonales();
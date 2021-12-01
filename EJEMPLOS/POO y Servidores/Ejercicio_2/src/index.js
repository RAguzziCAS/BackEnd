const Empresa = require('./models/empresa.model')
const Usuario = require('./models/usuario.model')
const Permiso = require('./models/permiso.model')

let empresa = new Empresa(1,"Crconsulting","CRC");
let permisos = [
    new Permiso(1,true),
    new Permiso(2,true),
    new Permiso(3,false),
    new Permiso(4,false),
];

let usuario = new Usuario('118640285',"Robert","123",empresa,permisos);

console.log(usuario.empresa.nombre);

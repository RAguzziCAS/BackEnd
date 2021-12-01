class Usuario{
    constructor(user_Id,nombre,pass,empresa,permisos){
        this.user_Id=user_Id;
        this.nombre=nombre;
        this.pass=pass;
        this.empresa = empresa;
        this.permisos=permisos;
    }
}

module.exports=Usuario;
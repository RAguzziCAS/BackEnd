using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BackEnd.Models
{
    public class Persona
    {
        public string cedula { get; set; }
        public string nombre { get; set; }
        public string primerApellido { get; set; }
        public string segundoApellido { get; set; }

        public Persona()
        {
            this.cedula = "";
            this.nombre = "";
            this.primerApellido = "";
            this.segundoApellido = "";
        }
    }
}
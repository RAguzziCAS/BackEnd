using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Clase_7.Models
{
    public class Persona
    {
        public int id { get; set; }
        public string nombre { get; set; }
        public int edad { get; set; }
        public double altura { get; set; }

        public Persona(int id, string nombre, int edad, double altura)
        {
            this.id = id;
            this.nombre = nombre;
            this.edad = edad;
            this.altura = altura;
        }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Clase_8.Models
{
    public class Articulo
    {
        public int id { get; set; }
        public string nombre { get; set; }
        public double precio { get; set; }
        public int cantidad { get; set; }

        public Articulo()
        {
            this.id = -1;
            this.nombre = string.Empty;
            this.precio = 0;
            this.cantidad = 0;
        }
    }
}
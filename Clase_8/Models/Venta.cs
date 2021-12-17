using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Clase_8.Models
{
    public class Venta
    {
        public int id { get; set; }
        public Articulo articulo { get; set; }
        public int cantidad { get; set; }

        public Venta()
        {
            this.id = -1;
            this.articulo = new Articulo();
            this.cantidad = 0;
        }
    }
}
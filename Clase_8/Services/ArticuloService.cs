using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

using Clase_8.Models;

namespace Clase_8.Services
{
    public static class ArticuloService
    {
        private static List<Articulo> inventario = new List<Articulo>();

        public static List<Articulo> ListarInventario()
        {
            return inventario;
        }

        public static Articulo BuscarInventario(int id)
        {
            try
            {
                return inventario.First(x => x.id == id);
            }
            catch (Exception)
            {
                return null;
            }
        }

        public static string InsertarInventario(Articulo nuevo)
        {
            if(inventario.Any(x=>x.id == nuevo.id))
            {
                return "NO se inserto el articulo, ID repetido";
            }
            else
            {
                inventario.Add(nuevo);
                return "Articulo Ingresado";
            }
            
        }

        public static string ActualizarInventario(Articulo nuevo, int id)
        {
            try
            {
                inventario.First(x => x.id == id).nombre = nuevo.nombre;
                inventario.First(x => x.id == id).precio = nuevo.precio;
                inventario.First(x => x.id == id).cantidad = nuevo.cantidad;
                return "Actualizacion exitosa";
            }
            catch (Exception)
            {
                return "Actualizacion fallida";
            }
        }
    }
}
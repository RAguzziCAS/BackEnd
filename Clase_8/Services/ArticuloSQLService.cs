using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

using System.Data;
using System.Data.SqlClient;
using Clase_8.Models;

namespace Clase_8.Services
{
    public static class ArticuloSQLService
    {
        private static string cadena = "Data Source = localhost; Initial Catalog = Clase_8; Integrated Security = True;";

        public static string InsertarSQL(Articulo nuevo)
        {
            try
            {
                SqlConnection conexion = new SqlConnection(cadena);
                conexion.Open();

                SqlCommand command = new SqlCommand("Sp_Inserta_Articulo", conexion);
                command.CommandType = CommandType.StoredProcedure;
                command.Parameters.AddWithValue("@pNombre", nuevo.nombre);
                command.Parameters.AddWithValue("@pPrecio", nuevo.precio);
                command.Parameters.AddWithValue("@pCantidad", nuevo.cantidad);

                command.ExecuteNonQuery();
                conexion.Close();
                return "Articulo ingresado exitosamente";
            }
            catch (Exception)
            {
                return "Articulo NO ingresado";
            }

        }

    }
}
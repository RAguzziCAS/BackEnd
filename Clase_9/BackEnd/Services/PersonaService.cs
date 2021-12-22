using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

using System.Data;
using System.Data.SqlClient;

using BackEnd.Models;

namespace BackEnd.Services
{
    public static class PersonaService
    {
        private static string connectionString = "Data Source = .; Initial Catalog = Ejemplo; Integrated Security = True;";
        public static List<Persona> ListarPersonas()
        {
            SqlConnection connection = new SqlConnection(connectionString);
            connection.Open();

            SqlCommand command = new SqlCommand("Sp_Lista_Personas", connection);

            SqlDataAdapter adapter = new SqlDataAdapter(command);

            DataSet data = new DataSet();
            adapter.Fill(data);

            List<Persona> lista = new List<Persona>();
            foreach (DataRow fila in data.Tables[0].Rows)
            {
                lista.Add(new Persona()
                {
                    cedula = fila.Field<string>("cedula"),
                    nombre = fila.Field<string>("nombre"),
                    primerApellido = fila.Field<string>("primerApellido"),
                    segundoApellido = fila.Field<string>("segundoApellido")
                });
            }
            connection.Close();
            return lista;
        }

        public static string InsertarPersona(Persona nuevo)
        {
            try
            {
                SqlConnection connection = new SqlConnection(connectionString);
                connection.Open();

                SqlCommand command = new SqlCommand("Sp_Inserta_Persona", connection);

                command.CommandType = CommandType.StoredProcedure;

                command.Parameters.AddWithValue("@pCedula", nuevo.cedula);
                command.Parameters.AddWithValue("@pNombre", nuevo.nombre);
                command.Parameters.AddWithValue("@pPrimerApellido", nuevo.primerApellido);
                command.Parameters.AddWithValue("@pSegundoApellido", nuevo.segundoApellido);

                command.ExecuteNonQuery();

                connection.Close();

                return "Ingreso exitoso";
            }
            catch (Exception)
            {
                return "No se ha logrado completar el ingreso";
            }
        }

        public static string ActualizaPersona(Persona nuevo)
        {
            SqlConnection connection = new SqlConnection(connectionString);
            connection.Open();

            SqlCommand command = new SqlCommand("Sp_Actualiza_Persona", connection);

            command.CommandType = CommandType.StoredProcedure;

            command.Parameters.AddWithValue("@pCedula", nuevo.cedula);
            command.Parameters.AddWithValue("@pNombre", nuevo.nombre);
            command.Parameters.AddWithValue("@pPrimerApellido", nuevo.primerApellido);
            command.Parameters.AddWithValue("@pSegundoApellido", nuevo.segundoApellido);

            command.ExecuteNonQuery();

            connection.Close();

            return "Actualizacion exitoso";
        }

        public static string DeletePersona(string cedula)
        {
            SqlConnection connection = new SqlConnection(connectionString);
            connection.Open();

            SqlCommand command = new SqlCommand("Sp_Delete_Persona", connection);

            command.CommandType = CommandType.StoredProcedure;

            command.Parameters.AddWithValue("@pCedula", cedula);
            
            command.ExecuteNonQuery();

            connection.Close();

            return "Eliminacion exitoso";
        }
    }
}
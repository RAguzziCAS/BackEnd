
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

using Clase_7.Models;
using static Clase_7.Services.PersonaService;

namespace Clase_7.Controllers
{
    public class PersonaController : ApiController
    {
        [HttpGet]
        [Route("api/persona/lista")]
        public IEnumerable<Persona> Lista()
        {
            return lista;
        }

        [HttpGet]
        [Route("api/persona/lista/{id}")]
        public IEnumerable<Persona> ListaEspecifica(int id)
        {
            return lista.Where(x=>x.id == id);
        }

        [HttpPut]
        [Route("api/persona/actualizar/{id}/{nuevoNombre}")]
        public string Actualizar(int id, string nuevoNombre)
        {
            lista.First(x => x.id == id).nombre = nuevoNombre;
            return "Nombre Actualizado";
        }

    }
}

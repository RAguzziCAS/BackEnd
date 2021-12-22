using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

using BackEnd.Models;

using static BackEnd.Services.PersonaService;

namespace BackEnd.Controllers
{
    public class PersonaController : ApiController
    {
        [HttpGet]
        [Route("api/persona/lista")]
        public List<Persona> Lista()
        {
            return ListarPersonas();
        }

        [HttpPost]
        [Route("api/persona/ingresar")]
        public string Insertar([FromBody]Persona nuevo)
        {
            return InsertarPersona(nuevo);
        }

        [HttpPut]
        [Route("api/persona/actualizar")]
        public string Actualizar([FromBody] Persona nuevo)
        {
            return ActualizaPersona(nuevo);
        }

        [HttpDelete]
        [Route("api/persona/delete/{cedula}")]
        public string Delete(string cedula)
        {
            return DeletePersona(cedula);
        }
    }
}

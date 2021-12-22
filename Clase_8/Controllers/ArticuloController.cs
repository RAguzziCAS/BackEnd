using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

using Clase_8.Models;
using static Clase_8.Services.ArticuloService;
using static Clase_8.Services.ArticuloSQLService;

namespace Clase_8.Controllers
{
    public class ArticuloController : ApiController
    {
        [HttpGet]
        [Route("api/articulo/lista")]
        public Articulo Lista()
        {
            return new Articulo(); ;
        }

        [HttpGet]
        [Route("api/articulo/buscar/{id}")]
        public Articulo Buscar(int id)
        {
            return BuscarInventario(id);
        }

        [HttpPost]
        [Route("api/articulo/insertar")]
        public string Insertar([FromBody]Articulo nuevo)
        {
            return InsertarSQL(nuevo);
        }

        [HttpPut]
        [Route("api/articulo/actualizar/{id}")]
        public string Actualizar([FromBody]Articulo nuevo,int id)
        {
            return ActualizarInventario(nuevo, id);
        }

    }
}

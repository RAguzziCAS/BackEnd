using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Clase_7.Models;

namespace Clase_7.Services
{
    public static class PersonaService
    {
        public static Persona[] lista =
        {
            new Persona(1,"Robert",20,1.75),
            new Persona(2,"Juan",25,1.85),
            new Persona(3,"Carmen",35,1.65)
        };
    }
}
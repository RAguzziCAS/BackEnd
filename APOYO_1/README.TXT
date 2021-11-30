Server es un conjunto de rutas que devuelven algun tipo de accion(respuesta)
    *Alguna informacion (lista)
    *Mensaje de exito   (confirmacion)
    *Mensaje de error   (fallo en la accion)
    *Configuracion      (token)

Router es un conjunto de direcciones

Rutas son direcciones de mi servidor a las cuales yo puedo accesar a travez de la url
    *dominio                (http://localhost:3000) ->  UBICACION DEL SERVIDOR
    *direcciones            (/api/persona/lista)
    *direccion principal    '/'
    *direccion subruta      '/api/'

Peticiones son acciones especificas ejecutadas sobre una direccion especificas
    *get    (Peticion de obtencion)
    *post   (Peticion de publicacion)
    *put    (Peticion de actualizacion)
    *delete (Peticion de eliminacion)

Peticiones tienen configuracion y tienen diferentes partes de ellas
    *ruta
    *header     (cabecera de la peticion)   ->  configuracion de la peticion
    *params     (parametros de una peticion) -> resquest
    *body       (contenido de la peticion)

Peticiones  
    *Solicitudes
    *Respuestas

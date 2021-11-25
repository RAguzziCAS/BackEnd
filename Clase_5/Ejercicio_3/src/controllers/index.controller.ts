import { Request, Response } from 'express'

export class IndexController {

    public Index(req: Request, res: Response) {
        res.send("Bienvenido a nuestra pagina");
    }

    public ListaPersonas(req: Request, res: Response) {

        let Lista = [
            {
                name:"Robert",
                lastname:"Aguzzi"
            },
            {
                name:"Juan",
                lastname:"Aguzzi"
            },
            {
                name:"Miguel",
                lastname:"Aguzzi"
            },
        ]

        res.json(Lista)

    }

}
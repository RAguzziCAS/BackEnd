"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndexController = void 0;
class IndexController {
    Index(req, res) {
        res.send("Bienvenido a nuestra pagina");
    }
    ListaPersonas(req, res) {
        let Lista = [
            {
                name: "Robert",
                lastname: "Aguzzi"
            },
            {
                name: "Juan",
                lastname: "Aguzzi"
            },
            {
                name: "Miguel",
                lastname: "Aguzzi"
            },
        ];
        res.json(Lista);
    }
}
exports.IndexController = IndexController;

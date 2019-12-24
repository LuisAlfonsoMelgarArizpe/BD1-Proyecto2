"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../database");
class Controlador {
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            var c = new database_1.database();
            //c.select("SELECT id,registro,nombre,foto FROM USUARIO WHERE registro = '" + req.body.name + "' AND clave = '" + req.body.pass +"' AND ")
            c.select("SELECT * FROM ALFONSO WHERE VAL1 = '" + req.body.val1 + "' AND VAL2 = '" + req.body.val2 + "'")
                .then(result => {
                console.log(result);
                res.json(result);
            })
                .catch(() => {
                res.json({ text: "No existe el alfonso xdxddx" });
            });
        });
    }
    alfonsos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            var c = new database_1.database();
            //c.select("SELECT id,registro,nombre,foto FROM USUARIO WHERE registro = '" + req.body.name + "' AND clave = '" + req.body.pass +"' AND ")
            c.select("SELECT * FROM ALFONSO")
                .then(result => {
                res.json(result);
            })
                .catch(() => {
                res.json({ text: "No existe el alfonso xdxddx" });
            });
        });
    }
}
exports.Controlador = Controlador;
exports.controlador = new Controlador();

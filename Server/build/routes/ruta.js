"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controlador_1 = require("../controllers/controlador");
class Ruta {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/login', controlador_1.controlador.login);
        this.router.get('/rep1', controlador_1.controlador.rep1);
        this.router.get('/rep2', controlador_1.controlador.rep2);
        this.router.get('/rep3', controlador_1.controlador.rep3);
        this.router.get('/rep4', controlador_1.controlador.rep4);
        this.router.get('/rep5', controlador_1.controlador.rep5);
        this.router.get('/rep6', controlador_1.controlador.rep6);
        this.router.get('/rep7', controlador_1.controlador.rep7);
        this.router.get('/rep8', controlador_1.controlador.rep8);
        this.router.get('/rep9', controlador_1.controlador.rep9);
        this.router.get('/rep10', controlador_1.controlador.rep10);
        this.router.get('/rep11', controlador_1.controlador.rep11);
        this.router.get('/rep12', controlador_1.controlador.rep12);
        this.router.get('/inventos', controlador_1.controlador.getInventos);
        this.router.post('/newInvento', controlador_1.controlador.postInvento);
        this.router.post('/delInvento', controlador_1.controlador.delInvento);
        this.router.get('/inventores', controlador_1.controlador.getInventores);
        this.router.post('/newInventor', controlador_1.controlador.postInventor);
        this.router.get('/paises', controlador_1.controlador.getPaises);
        this.router.get('/profesionales', controlador_1.controlador.getProfesionales);
        this.router.post('/newProfesional', controlador_1.controlador.postProfesional);
        this.router.get('/regiones', controlador_1.controlador.getRegiones);
    }
    test() {
        console.log("TEST");
    }
}
const ruta = new Ruta();
exports.default = ruta.router;

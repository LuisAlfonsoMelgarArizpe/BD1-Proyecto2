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
        this.router.get('/alfonsos', controlador_1.controlador.alfonsos);
    }
    test() {
        console.log("TEST");
    }
}
const ruta = new Ruta();
exports.default = ruta.router;

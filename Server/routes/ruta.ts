import { Router } from 'express';
import {controlador} from '../controllers/controlador';

class Ruta {

   public router:Router;

    constructor() {
        this.router =Router();
        this.config();
    }
    config() {
        this.router.post('/login', controlador.login);
        this.router.get('/alfonsos', controlador.alfonsos);
    }
    test() {
        console.log("TEST");
    }
}
const ruta = new Ruta();
export default  ruta.router;

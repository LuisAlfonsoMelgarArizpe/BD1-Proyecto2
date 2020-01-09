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
        this.router.get('/rep1',controlador.rep1);
        this.router.get('/rep2',controlador.rep2);
        this.router.get('/rep3',controlador.rep3);
        this.router.get('/rep4',controlador.rep4);
        this.router.get('/rep5',controlador.rep5);
        this.router.get('/rep6',controlador.rep6);
        this.router.get('/rep7',controlador.rep7);
        this.router.get('/rep8',controlador.rep8);
        this.router.get('/rep9',controlador.rep9);
        this.router.get('/rep10',controlador.rep10);
        this.router.get('/rep11',controlador.rep11);
        this.router.get('/rep12',controlador.rep12);
        this.router.get('/inventos',controlador.getInventos);
        this.router.post('/newInvento',controlador.postInvento);
        this.router.post('/delInvento',controlador.delInvento);
        this.router.get('/inventores',controlador.getInventores);
        this.router.post('/newInventor',controlador.postInventor); 
        this.router.get('/paises',controlador.getPaises);
        this.router.get('/profesionales',controlador.getProfesionales);
        this.router.post('/newProfesional',controlador.postProfesional); 
        this.router.get('/regiones',controlador.getRegiones);
    }
    test() {
        console.log("TEST");
    }
}
const ruta = new Ruta();
export default  ruta.router;

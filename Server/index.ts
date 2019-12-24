import express, { Application } from 'express';
import ruta from './routes/ruta'
import morgan from 'morgan';
import cors from 'cors';

class Server {

    public app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json()); 
        this.app.use(express.urlencoded({extended: false}));
        
    }

    routes(): void {
        this.app.use('/',ruta);
    }

    start(): void {
        this.app.listen(3000, "0.0.0.0", () => {
            console.log('Server on port:', this.app.get('port'));
        });
    }

}


const server = new Server();
server.start();

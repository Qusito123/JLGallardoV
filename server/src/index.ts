import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import colorRoutes from './routes/colorRoutes';
import materialRoutes from './routes/materialRoutes';
import typeRoutes from './routes/typeRoutes';
import inventoryRoutes from './routes/inventoryRoutes';
import cupRoutes from './routes/cupRoutes';

class Server{
    public app: Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void{
        this.app.set('port', process.env.PORT || '3000');
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}));
    }

    routes(): void{
        this.app.use(indexRoutes);
        this.app.use('/market/color', colorRoutes);
        this.app.use('/market/material', materialRoutes);
        this.app.use('/market/type', typeRoutes);
        this.app.use('/market/inventory', inventoryRoutes);
        this.app.use('/market/cup', cupRoutes);
    }

    start(): void{
        this.app.listen(this.app.get('port'), () => {
            console.log('Server listening on port ', this.app.get('port'));
        });
    }
}

const server = new Server();
server.start();
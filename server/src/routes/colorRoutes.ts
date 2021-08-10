import { Router } from 'express';

import colorController from '../controller/colorController';

class ColorRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', colorController.listar);
        this.router.get('/:id', colorController.listarUno);
    }
}

const colorRoutes = new ColorRoutes();
export default colorRoutes.router;
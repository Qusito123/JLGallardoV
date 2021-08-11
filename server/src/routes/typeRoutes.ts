import { Router } from 'express';

import typeController from '../controller/typeController';

class TypeRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', typeController.listar);
        this.router.get('/:id', typeController.listarUno);
    }
}

const typeRoutes = new TypeRoutes();
export default typeRoutes.router;
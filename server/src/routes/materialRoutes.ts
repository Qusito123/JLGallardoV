import { Router } from 'express';

import materialController from '../controller/materialController';

class MaterialRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', materialController.listar);
        this.router.get('/:id', materialController.listarUno);
    }
}

const materialRoutes = new MaterialRoutes();
export default materialRoutes.router;
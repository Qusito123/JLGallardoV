import { Router } from 'express';

import cupController from '../controller/cupController';

class CupRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', cupController.listar);
        this.router.get('/:id', cupController.listarUno);
        this.router.get('/tipo/:tipo', cupController.listarByTipo);
        this.router.post('/', cupController.crear);
        this.router.put('/:id', cupController.editar);
        this.router.delete('/:id', cupController.eliminar);
    }
}

const cupRoutes = new CupRoutes();
export default cupRoutes.router;
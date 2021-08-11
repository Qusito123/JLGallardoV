import { Router } from 'express';

import inventoryController from '../controller/inventoryController';

class InventoryRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', inventoryController.listar);
        this.router.get('/:id', inventoryController.listarUno);
        this.router.get('/tipo/:tipo', inventoryController.listarByTipo);
        this.router.put('/:id', inventoryController.editarCantidad);
        this.router.delete('/:id', inventoryController.eliminar);
    }
}

const inventoryRoutes = new InventoryRoutes();
export default inventoryRoutes.router;
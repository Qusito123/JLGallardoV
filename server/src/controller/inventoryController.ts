import { Request, Response } from 'express';

import db from '../database';

class InventoryController{

    public async listar(req: Request, res: Response) {
        await db.query('SELECT i.id_inventory, i.id_type, c.name_type, i.quantity_inventory FROM inventory i INNER JOIN cup_type c ON i.id_type = c.id_type', function(err, result, fields) {
            if(err) throw err;
            res.json(result);
        });
    }

    public async listarUno(req: Request, res: Response):Promise<any> {
        const {
            id
        } = req.params;
        
        await db.query('SELECT i.id_inventory, i.id_type, c.name_type, i.quantity_inventory FROM inventory i INNER JOIN cup_type c ON i.id_type = c.id_type WHERE id_inventory=?', [id], function (err, result, fields) {
            if(err) throw err;
            if(result.length > 0){
                res.json(result);
            }else{
                res.status(404).json({
                    message: 'Inventory not found'
                });
            }
        });
    }

    public async listarByTipo(req: Request, res: Response):Promise<any> {
        const {
            tipo
        } = req.params;

        await db.query('SELECT * FROM inventory WHERE id_type=?', [tipo], function(err, result, fields) {
            if(err) throw err;
            if(result.length > 0){
                res.json(result);
            }else{
                res.status(404).json({
                    message: 'Inventory type not found'
                });
            }
        });
    }

    public async editarCantidad(req: Request, res: Response):Promise<void> {
        const {
            id
        } = req.params;

        await db.query('UPDATE inventory set ? WHERE id_inventory = ?', [req.body, id], function (err, result, fields) {
            if(err) throw err;
        });

        res.json({
            message: 'Inventory updated ' + id
        });
    }

    public async eliminar(req: Request, res: Response): Promise<void>{
        const { 
            id
        } = req.params;

        await db.query('DELETE FROM inventory WHERE id_inventory = ?', [id], function(err, result, fields){
            if(err) throw err;
            res.json({message: 'Inventory succesfully deleted'});
        });
    }
}

const inventoryController = new InventoryController();
export default inventoryController;
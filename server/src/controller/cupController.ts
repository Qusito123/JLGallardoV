import { Request, Response } from 'express';

import db from '../database';

class CupController{

    public async listar(req: Request, res: Response) {
        await db.query('SELECT c.id_cup, t.name_type, cl.name_color, c.dimentions_cup, c.capacity_cup, c.model_cup, m.name_material FROM cup c INNER JOIN cup_type t ON t.id_type = c.id_type INNER JOIN color cl ON cl.id_color = c.id_color INNER JOIN material m ON m.id_material = c.id_material', function (err, result, fields) {
            if(err) throw err;
            res.json(result);
        });
    }

    public async listarUno(req: Request, res: Response):Promise<any> {
        const {
            id
        } = req.params;

        await db.query('SELECT * FROM cup WHERE id_cup = ?', [id], function (err, result, fields) {
            if(err) throw err;
            if(result.length > 0) {
                res.json(result);
            }else{
                res.status(404).json({
                    message: 'Cup not found.'
                });
            }
        });
    }

    public async listarByTipo(req: Request, res: Response): Promise<any> {
        const {
            tipo
        } = req.params;

        await db.query('SELECT * FROM cup WHERE id_type = ?', [tipo], function (err, result, fields) {
            if(err) throw err;
            if(result.length > 0) {
                res.json(result);
            }else{
                res.status(404).json({
                    message: 'Cup type not found.'
                });
            }
        });
    }

    public async crear(req: Request, res: Response): Promise<void> {
        await db.query('INSERT INTO cup set ?', [req.body]);
        res.json({
            text: 'Cup created'
        });
    }

    public async editar(req: Request, res: Response): Promise<void> {
        const {
            id
        } = req.params;

        await db.query('UPDATE cup set ? WHERE id_cup = ?', [req.body, id], function(err, result, fields) {
            if(err) throw err;
        });

        res.json({
            message: 'Cup updated ' + id
        });
    }

    public async eliminar(req: Request, res: Response): Promise<void>{
        const {
            id
        } = req.params;

        await db.query('DELETE FROM cup WHERE id_cup = ?', [id], function(err, result, fields){
            if(err) throw err;
            res.json({message: 'Cup succesfully deleted.'});
        });
    }
}

const cupController = new CupController();
export default cupController;
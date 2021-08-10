import { Request, Response } from 'express';

import db from '../database';

class ColorController{

    public async listar(req: Request, res: Response){
        await db.query('SELECT * FROM color', function(err, result, fields){
            if (err) throw err;
            res.json(result);
        });
    }

    public async listarUno(req: Request, res: Response){
        const {
            id
        } = req.params;

        await db.query('SELECT * FROM color WHERE id_color = ?', [id], function(err, result, fields){
            if(err) throw err;
            if(result.length > 0){
                res.json(result);
            }else{
                res.status(404).json({
                    message: 'Color not found'
                });
            }
        });
    }
}

const colorController = new ColorController();
export default colorController;
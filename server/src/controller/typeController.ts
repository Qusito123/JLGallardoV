import { Request, Response } from 'express';

import db from '../database';

class TypeController{

    public async listar(req: Request, res: Response){
        await db.query('SELECT * FROM cup_type', function(err, result, fields){
            if(err) throw err;
            res.json(result);
        });
    }

    public async listarUno(req: Request, res: Response){
        const {
            id
        } = req.params;

        await db.query('SELECT * FROM cup_type WHERE id_type = ?', [id], function(err, result, fields){
            if(err) throw err;
            
            if(result.lenght > 0){
                res.json(result);
            }else{
                res.status(404).json({
                    message: 'Cup type not found.'
                });
            }
        });
    }
}

const typeController = new TypeController();
export default typeController;
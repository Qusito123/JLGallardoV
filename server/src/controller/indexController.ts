import { Request, Response } from 'express';

class IndexController{

    public index(req: Request, res: Response){
        res.send('Request ok');
    }
}

export const indexController = new IndexController();
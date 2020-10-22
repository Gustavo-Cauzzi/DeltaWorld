import db from "../database/connections";
import {Response, Request} from 'express';

export default class TypeController{
  async create (req: Request, res: Response) {
    const {
      name,
      default_avatar,
    } = req.body;

    const trx = await db.transaction(); 

    try{  
      await trx('types').insert({
        name,
        default_avatar,
      })
      
      await trx.commit();

      return res.status(201).send();
    }catch(err){
      await trx.rollback()
      return res.status(400).json({
          error: 'Unexpected error while creating new type'
      });
    }
  }

  async index (req: Request, res: Response) {
    const classes = await db('types').select('*');

    return res.json(classes);
  }
};
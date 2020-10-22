import db from "../database/connections";
import {Response, Request} from 'express';

export default class AmusementController{
  async create (req: Request, res: Response) {
    const {
      name,
      type,
      bio,
      cost,
      avatar,
    } = req.body;

    const trx = await db.transaction();
    try{  
      await trx('amusements').insert({
        name,
        avatar,
        type_id : type,
        bio,
        cost
      });

      await trx.commit();

      return res.send();
    } catch(err){
      await trx.rollback()
      return res.status(400).json({
          error: 'Unexpected error while creating new amusement'
      });
    }
  }

  async index (req: Request, res: Response){
    const classes = await db('amusements')
    .join('types','amusements.type_id','=','types.id')
    .select(['types.*','types.name as type_name','amusements.*']);

    return res.json(classes);
  }

  async delete(req: Request, res: Response){
    const { id } = req.params;

    const trx = await db.transaction();
    try{  
      await trx('amusements').delete(id);

      await trx.commit();

      return res.send();
    } catch(err){
      await trx.rollback()
      return res.status(400).json({
          error: 'Unexpected error while deleting amusement'
      });
    }
  }
}
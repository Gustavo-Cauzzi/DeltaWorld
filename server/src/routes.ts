import express from 'express';
import AmusementController from './controllers/AmusementController';
import TypesControllers from './controllers/TypesController';

const routes = express.Router();
const amusementController = new AmusementController();
const typesController = new TypesControllers();


routes.get('/amusements', amusementController.index);
routes.post('/amusements', amusementController.create);
routes.delete('/amusements/:id', amusementController.delete);

routes.get('/types', typesController.index);
routes.post('/types', typesController.create);

export default routes;
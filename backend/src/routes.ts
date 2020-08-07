import express, { request } from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();
const classesControllesr = new ClassesController();
const connectionsController = new ConnectionsController();

routes.post('/classes', classesControllesr.createClass);
routes.get('/classes', classesControllesr.index);

routes.get('/connections', connectionsController.index);
routes.post('/connections', connectionsController.createConnection);

export default routes;
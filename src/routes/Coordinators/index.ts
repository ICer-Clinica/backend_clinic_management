import { Router } from 'express';
import { CoordinatorController } from '../../controllers/CoordinatorsController';

const routes = Router();

routes.post('/coordinators', new CoordinatorController().create);
routes.get('/coordinators/:clinic_id', new CoordinatorController().listAll);
routes.delete('/coordinators/:coordinator_id', new CoordinatorController().delete);

export { routes as CoordinatorsRoutes };

import { Router } from 'express';
import { CoordinatorController } from '../../controllers/CoordinatorsController';

const routes = Router();

routes.post('/coordinators', new CoordinatorController().create);
routes.get('/coordinators/:clinic_id', new CoordinatorController().listAll);
routes.delete('/coordinators/:coordinator_id', new CoordinatorController().delete);
routes.put('/coordinators/:coordinator_id', new CoordinatorController().update);

export { routes as CoordinatorsRoutes };

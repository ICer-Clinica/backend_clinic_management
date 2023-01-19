import { Router } from 'express';
import { SuperadminController } from '../../controllers/SuperadminController';

const routes = Router();

routes.get('/superadmin', new SuperadminController().listAll);
routes.get('/superadmin', new SuperadminController().create);
routes.get('/superadmin/:query', new SuperadminController().listOne);
routes.delete('/superadmin/:query', new SuperadminController().delete);

export { routes as SuperadminRoutes };

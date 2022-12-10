import { Router } from 'express';
import { HealthSecretaryController } from '../../controllers/HealthSecretaryController';

const routes = Router();

routes.post('/health-secretaries', new HealthSecretaryController().create);
routes.get('/health-secretaries', new HealthSecretaryController().listAll);
routes.delete('/health-secretaries/:query', new HealthSecretaryController().delete);

export { routes as HealthSecretaryRoutes };

import { Router } from 'express';
import { HealthSecretaryController } from '../../controllers/HealthSecretaryController';

const routes = Router();

routes.post('/health-secretaries', new HealthSecretaryController().create);
routes.get('/health-secretaries/:clinic_id', new HealthSecretaryController().listAll);
routes.get('/health-secretaries', new HealthSecretaryController().list);
routes.delete('/health-secretaries/:query', new HealthSecretaryController().delete);
routes.put('/health-secretaries/:healthSecretary_id', new HealthSecretaryController().update);

export { routes as HealthSecretaryRoutes };

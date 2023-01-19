import { Router } from 'express';
import { ClinicController } from '../../controllers/ClinicController';

const routes = Router();

routes.post('/clinic', new ClinicController().create);
routes.get('/clinic', new ClinicController().listAll);
routes.get('/clinic/:param', new ClinicController().listOne);
routes.delete('/clinic/:query', new ClinicController().delete);
routes.put('/clinic/:clinic_id', new ClinicController().update);

export { routes as ClinicRoutes };

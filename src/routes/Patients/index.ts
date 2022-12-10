import { Router } from 'express';
import { PatientsController } from '../../controllers/PatientsController';

const routes = Router();

routes.post('/patients', new PatientsController().create);
routes.get('/patients/:clinic_id', new PatientsController().listAll);
routes.delete('/patients/:patient_id', new PatientsController().delete);

export { routes as PatientsRoutes };

import { Router } from 'express';
import { TherapistsController } from '../../controllers/TherapistsController';

const routes = Router();

routes.post('/therapist', new TherapistsController().create);
routes.get('/therapist/:clinic_id', new TherapistsController().listAll);
routes.delete('/therapist/:therapist_id', new TherapistsController().delete);
routes.put('/therapist/:therapist_id', new TherapistsController().update);

export { routes as TherapistRoutes };

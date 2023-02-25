import { Router } from 'express';
import { ProcedureController } from '../../controllers/ProcedureController';

const routes = Router();

routes.post('/procedure', new ProcedureController().create);
routes.post('/procedures/multiple', new ProcedureController().createMultiple);
routes.get('/procedure/:clinic_id', new ProcedureController().listAll);
routes.get('/procedure/therapist/:therapist_id', new ProcedureController().listByTherapist);
routes.delete('/procedure/:procedure_id', new ProcedureController().delete);
routes.put('/procedure/:procedure_id', new ProcedureController().update);

export { routes as ProcedureRoutes };

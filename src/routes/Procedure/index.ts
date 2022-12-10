import { Router } from 'express';
import { ProcedureController } from '../../controllers/ProcedureController';

const routes = Router();

routes.post('/procedure', new ProcedureController().create);
routes.get('/procedure/:clinic_id', new ProcedureController().listAll);
routes.delete('/procedure/:procedure_id', new ProcedureController().delete);

export { routes as ProcedureRoutes };
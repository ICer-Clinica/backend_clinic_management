import { Router } from 'express';
import { UpdatePasswordController } from '../../controllers/UpdatePasswordController';

const routes = Router();

routes.put('/update-password/:id', new UpdatePasswordController().update);

export { routes as UpdatePasswordRoutes };


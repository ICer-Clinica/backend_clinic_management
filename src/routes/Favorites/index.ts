import { Router } from 'express';
import { FavoritesController } from '../../controllers/FavoritesController';

const routes = Router();

routes.post('/favorites', new FavoritesController().create);
routes.get('/favorites', new FavoritesController().listAll);
routes.get('/favorites/:param', new FavoritesController().listOne);
routes.delete('/favorites/:query', new FavoritesController().delete);
routes.put('/favorites/:favorite_id', new FavoritesController().update);
routes.get('/favorites/therapist/:therapist_id', new FavoritesController().listAllByTherapist);

export { routes as FavoritesRoutes };

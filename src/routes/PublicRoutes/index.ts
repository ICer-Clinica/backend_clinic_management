import { Router } from 'express';
import { AuthController } from '../../controllers/AuthController';
import { SuperadminController } from '../../controllers/SuperadminController';

const routes = Router();

routes.get('/', (req, res) => {
  res.json({
    API: 'running',
    message: 'Developed by Geovane and Guilherme, 2022.',
  });
});

//authentication route
routes.post('/auth', new AuthController().authenticate);

// superadmin routes
routes.post('/superadmin', new SuperadminController().create);

export { routes as PublicRoutes };

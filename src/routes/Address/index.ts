import { Router } from 'express';
import { AddressController } from '../../controllers/AddressController';

const routes = Router();

routes.post('/address', new AddressController().create);
routes.get('/address', new AddressController().listAll);
routes.get('/address/:param', new AddressController().listOne);
routes.delete('/address/:query', new AddressController().delete);
routes.put('/address/:address_id', new AddressController().update);

export { routes as AddressRoutes };

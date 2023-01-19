import { Router } from 'express';
import { AdministrativeSecretaryController } from '../../controllers/AdministrativeSecretaryController';

const routes = Router();

routes.post('/adm-secretary', new AdministrativeSecretaryController().create);
routes.get('/adm-secretary/:clinic_id', new AdministrativeSecretaryController().listAll);
routes.put('/adm-secretary/:administrativeSecretary_id', new AdministrativeSecretaryController().update);
routes.delete('/adm-secretary/:admSecretary_id', new AdministrativeSecretaryController().delete);

export { routes as AdministrativeSecretaryRoutes };

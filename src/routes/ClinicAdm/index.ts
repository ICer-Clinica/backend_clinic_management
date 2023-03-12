import { Router } from 'express';
import { ClinicAdministratorsController } from '../../controllers/ClinicAdministratorsController';

const routes = Router();

routes.post('/clinic-adm', new ClinicAdministratorsController().create);
routes.get('/clinic-adm', new ClinicAdministratorsController().listAll);
routes.get('/clinic-adm/:param', new ClinicAdministratorsController().listOne);
routes.get('/clinic-adm/clinic/:clinic_id', new ClinicAdministratorsController().listAllByClinicID);
routes.delete('/clinic-adm/:clinicAdm_id', new ClinicAdministratorsController().delete);
routes.put('/clinic-adm/:clinicAdministrator_id', new ClinicAdministratorsController().update);


export { routes as ClinicAdmRoutes };

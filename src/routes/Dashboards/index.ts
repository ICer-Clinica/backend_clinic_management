import { Router } from 'express';
import { DashboardsController } from '../../controllers/DashboardsController';

const routes = Router();

routes.get('/total-of-clinics', new DashboardsController().totalOfClinics);
routes.get('/total-of-therapists', new DashboardsController().totalOfTherapists);
routes.get('/total-of-therapists/:clinic_id', new DashboardsController().totalOfTherapistsByClinic);
routes.get('/total-of-patients', new DashboardsController().totalOfPatients);
routes.get('/total-of-patients/:clinic_id', new DashboardsController().totalOfPatientsByClinic);
routes.get('/total-of-attendances', new DashboardsController().totalOfAttendances);
routes.get('/total-of-attendances/:clinic_id', new DashboardsController().totalOfAttendancesByClinic);
routes.get('/total-of-attendances/this-month', new DashboardsController().totalOfAttendancesThisMonth);
routes.get('/total-of-attendances/:clinic_id/this-month', new DashboardsController().totalOfAttendancesThisMonthByClinic);

export { routes as DashboardsRoutes };


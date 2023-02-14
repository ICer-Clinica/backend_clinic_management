import { Router } from 'express';
import AuthMiddleware from './middlewares/AuthMiddleware';
import { AddressRoutes } from './routes/Address';
import { AdministrativeSecretaryRoutes } from './routes/AdministrativeSecretary';
import { AttendanceRoutes } from './routes/Attendance';
import { ClinicRoutes } from './routes/Clinic';
import { ClinicAdmRoutes } from './routes/ClinicAdm';
import { CoordinatorsRoutes } from './routes/Coordinators';
import { FavoritesRoutes } from './routes/Favorites';
import { HealthSecretaryRoutes } from './routes/HealthSecretary';
import { PatientsRoutes } from './routes/Patients';
import { ProcedureRoutes } from './routes/Procedure';
import { PublicRoutes } from './routes/PublicRoutes';
import { SuperadminRoutes } from './routes/Superadmin';
import { TherapistRoutes } from './routes/Therapist';

const routes = Router();

routes.use(PublicRoutes);
routes.use(AuthMiddleware); // middleware of authentication
routes.use(SuperadminRoutes);
routes.use(AddressRoutes);
routes.use(ClinicRoutes);
routes.use(ClinicAdmRoutes);
routes.use(HealthSecretaryRoutes);
routes.use(TherapistRoutes);
routes.use(ProcedureRoutes);
routes.use(PatientsRoutes);
routes.use(CoordinatorsRoutes);
routes.use(AdministrativeSecretaryRoutes);
routes.use(FavoritesRoutes);
routes.use(AttendanceRoutes);

export { routes };

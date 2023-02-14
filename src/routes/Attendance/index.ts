import { Router } from 'express';
import { AttendanceController } from '../../controllers/AttendanceController';

const routes = Router();

routes.post('/attendance', new AttendanceController().create);
routes.get('/services/by/:therapist_id/:clinic_id', new AttendanceController().listServicesDoneByTherapist);
routes.get('/attendance/:attendance_id', new AttendanceController().listOneAttendance);

export { routes as AttendanceRoutes };


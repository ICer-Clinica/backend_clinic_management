import { Request,Response } from 'express';
import { CreateAttendanceService } from '../../services/AttendanceServices/CreateAttendanceService';
import { ListOneAttendanceService } from '../../services/AttendanceServices/ListOneAttendanceService';
import { ListServicesDoneByTherapist } from '../../services/AttendanceServices/ListServicesDoneByTherapist';

export class AttendanceController {
  async create(req: Request, res: Response) {
    const { clinic_id, patient_id, procedures, therapist_id } = req.body;
  
    const service = new CreateAttendanceService();
  
    const result = await service.execute({
      clinic_id, 
      patient_id,
      procedures,
      therapist_id
    });
  
    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }
  
    return res.json(result);
  }

  async listServicesDoneByTherapist(req: Request, res: Response) {
    const { therapist_id, clinic_id } = req.params;
  
    const service = new ListServicesDoneByTherapist();
  
    const result = await service.execute({
      therapist_id, clinic_id
    });
  
    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }
  
    return res.json(result);
  }

  async listOneAttendance(req: Request, res: Response) {
    const { attendance_id } = req.params;
  
    const service = new ListOneAttendanceService();
  
    const result = await service.execute({
      attendance_id
    });
  
    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }
  
    return res.json(result);
  }
}
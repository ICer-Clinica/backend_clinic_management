import { Request, Response } from 'express';
import { TotalOfAttendanceService } from '../../services/DashboardsServices/TotalOfAttendance';
import { TotalOfClinicsService } from '../../services/DashboardsServices/TotalOfClinics';
import { TotalOfPatientsService } from '../../services/DashboardsServices/TotalOfPatients';
import { TotalOfTherapistsService } from '../../services/DashboardsServices/TotalOfTherapists';

export class DashboardsController {
  async totalOfClinics(req: Request, res: Response) {
    const service = new TotalOfClinicsService();

    const result = await service.execute();

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.json(result);
  }
  async totalOfTherapists(req: Request, res: Response) {
    const service = new TotalOfTherapistsService();

    const result = await service.totalTherapists();

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.json(result);
  }
  async totalOfTherapistsByClinic(req: Request, res: Response) {
    const {clinic_id} = req.params;

    const service = new TotalOfTherapistsService();

    const result = await service.totalTherapistsByClinic({
      clinic_id
    });

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.json(result);
  }
  async totalOfPatients(req: Request, res: Response) {
    const service = new TotalOfPatientsService();

    const result = await service.totalPatients();

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.json(result);
  }
  async totalOfPatientsByClinic(req: Request, res: Response) {
    const {clinic_id} = req.params;

    const service = new TotalOfPatientsService();

    const result = await service.totalPatientsByClinic({
      clinic_id
    });

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.json(result);
  }
  async totalOfAttendances(req: Request, res: Response) {
    const service = new TotalOfAttendanceService();

    const result = await service.totalAttendances();

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.json(result);
  }
  async totalOfAttendancesByClinic(req: Request, res: Response) {
    const {clinic_id} = req.params;

    const service = new TotalOfAttendanceService();

    const result = await service.totalAttendancesByClinic({
      clinic_id
    });

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.json(result);
  }
  async totalOfAttendancesThisMonth(req: Request, res: Response) {
    const service = new TotalOfAttendanceService();    

    const result = await service.totalAttendancesThisMonth();

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.json(result);
  }
  async totalOfAttendancesThisMonthByClinic(req: Request, res: Response) {
    const {clinic_id} = req.params;

    const service = new TotalOfAttendanceService();

    const result = await service.totalAttendancesByClinicThisMonth({
      clinic_id
    });

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.json(result);
  }
  async rankingOfClinics(req: Request, res: Response) {
    const {clinic_id} = req.params;

    const service = new TotalOfAttendanceService();

    const result = await service.rankingOfClinics();

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.json(result);
  }
}

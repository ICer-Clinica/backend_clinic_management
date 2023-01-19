import { Request, Response } from 'express';
import { CreatePatientService } from '../../services/PatientsService/CreatePatientService';
import { DeletePatientService } from '../../services/PatientsService/DeletePatientService';
import { ListAllPatientByClinicService } from '../../services/PatientsService/ListAllByClinicPatientService';
import { UpdatePatientService } from '../../services/PatientsService/UpdatePatientService';

export class PatientsController {
  async create(req: Request, res: Response) {
    const { name, phone, cpf, birth_date, sus_card, clinic_id } = req.body;

    const service = new CreatePatientService();

    const result = await service.execute({
      name,
      phone,
      cpf,
      birth_date,
      sus_card,
      clinic_id,
    });

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.json(result);
  }

  async listAll(req: Request, res: Response) {
    const { clinic_id } = req.params;

    const service = new ListAllPatientByClinicService();

    const result = await service.execute({ clinic_id });

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.json(result);
  }

  async delete(req: Request, res: Response) {
    const { patient_id } = req.params;

    const service = new DeletePatientService();

    const result = await service.execute({ patient_id });

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.json(result);
  }

  async update(req: Request, res: Response) {
    const { name, sus_card, phone, cpf, birth_date, clinic_id } = req.body;
    const { patient_id } = req.params;
    const service = new UpdatePatientService();

    const result = await service.execute({
      patient_id,
      name,
      sus_card,
      phone,
      cpf,
      birth_date,
      clinic_id,
    });

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.json(result);
  }
}

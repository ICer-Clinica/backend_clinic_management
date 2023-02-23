import { Request, Response } from 'express';
import { TherapistRole } from '../../entities/TherapistEntitie';
import { CreateTherapistService } from '../../services/TherapistServices/CreateTherapistService';
import { DeleteTherapistService } from '../../services/TherapistServices/DeleteTherapistService';
import { ListAllByClinicTherapistsService } from '../../services/TherapistServices/ListAllByClinicTherapistsService';
import { UpdateTherapistService } from '../../services/TherapistServices/UpdateTherapistService';

export class TherapistsController {
  async create(req: Request, res: Response) {
    const { name, email, password, clinic_id, office, cns } = req.body;

    const service = new CreateTherapistService();

    if (office !== TherapistRole.OCCUPATIONAL_THERAPY && office !== TherapistRole.PHYSIOTHERAPY && office !== TherapistRole.PSYCHOLOGY) {
      return new Error('Invalid office');
    }

    const result = await service.execute({
      name,
      email,
      password,
      role: 'therapist',
      office,
      cns,
      clinic_id,
    });

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.json(result);
  }

  async listAll(req: Request, res: Response) {
    const { clinic_id } = req.params;

    const service = new ListAllByClinicTherapistsService();

    const result = await service.execute({ clinic_id });

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.json(result);
  }

  async delete(req: Request, res: Response) {
    const { therapist_id } = req.params;

    const service = new DeleteTherapistService();

    const result = await service.execute({ therapist_id });

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.json(result);
  }

  async update(req: Request, res: Response) {
    const { name, email, password, role, clinic_id, office, cns } = req.body;
    const { therapist_id } = req.params;
    const service = new UpdateTherapistService();

    if (office !== TherapistRole.OCCUPATIONAL_THERAPY && office !== TherapistRole.PHYSIOTHERAPY && office !== TherapistRole.PSYCHOLOGY) {
      return new Error('Invalid office');
    }

    const result = await service.execute({
      therapist_id,
      name,
      email,
      password,
      role,
      office,
      cns,
      clinic_id,
    });

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.json(result);
  }
}

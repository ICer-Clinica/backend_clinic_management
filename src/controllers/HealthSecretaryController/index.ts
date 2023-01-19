import { Request, Response } from 'express';
import { CreateHealthSecretaryService } from '../../services/HealthSecretariesServices/CreateHealthSecretaryService';
import { DeleteHealthSecretaryService } from '../../services/HealthSecretariesServices/DeleteHealthSecretaryService';
import { ListAllByClinicHealthSecretariesService } from '../../services/HealthSecretariesServices/ListAllByClinicHealthSecretaries';
import { UpdateHealthSecretaryService } from '../../services/HealthSecretariesServices/UpdateHealthSecretaryService';
import { verifySuperadminPermissions } from '../../utils';

export class HealthSecretaryController {
  async create(req: Request, res: Response) {
    const { name, email, password, clinic_id } = req.body;

    if (!verifySuperadminPermissions(req)) {
      return res.status(401).json('User not authorized!');
    }

    const service = new CreateHealthSecretaryService();

    const result = await service.execute({
      name,
      email,
      password,
      role: 'healthSecretary',
      clinic_id,
    });

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.json(result);
  }

  async listAll(req: Request, res: Response) {
    const { clinic_id } = req.params;

    const service = new ListAllByClinicHealthSecretariesService();

    const result = await service.execute({ clinic_id });

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.json(result);
  }

  async delete(req: Request, res: Response) {
    const { query } = req.params;

    const service = new DeleteHealthSecretaryService();

    const result = await service.execute({ query });

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.json(result);
  }

  async update(req: Request, res: Response) {
    const { name, email, password, role, clinic_id } = req.body;
    const { healthSecretary_id } = req.params;
    const service = new UpdateHealthSecretaryService();

    const result = await service.execute({
      healthSecretary_id,
      name,
      email,
      password,
      role,
      clinic_id,
    });

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.json(result);
  }
}

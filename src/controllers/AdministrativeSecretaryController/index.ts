import { Request, Response } from 'express';
import { CreateAdministrativeSecretaryService } from '../../services/AdministrativeSecretaryServices/CreateAdministrativeSecretary';
import { DeleteAdministrativeSecretary } from '../../services/AdministrativeSecretaryServices/DeleteAdministrativeSecretary';
import { ListAllAdministrativeSecretaries } from '../../services/AdministrativeSecretaryServices/ListAllAdministrativeSecretaries';
import { UpdateAdministrativeSecretaryService } from '../../services/AdministrativeSecretaryServices/UpdateAdministrativeSecretaryService';

export class AdministrativeSecretaryController {
  async create(req: Request, res: Response) {
    const { name, email, password, clinic_id } = req.body;

    const service = new CreateAdministrativeSecretaryService();

    const result = await service.execute({
      name,
      email,
      password,
      role: 'admnistrativeSecretary',
      clinic_id,
    });

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.json(result);
  }

  async listAll(req: Request, res: Response) {
    const { clinic_id } = req.params;

    const service = new ListAllAdministrativeSecretaries();

    const result = await service.execute({ clinic_id });

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.json(result);
  }

  async delete(req: Request, res: Response) {
    const { admSecretary_id } = req.params;

    const service = new DeleteAdministrativeSecretary();

    const result = await service.execute({ admSecretary_id });

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.json(result);
  }

  async update(req: Request, res: Response) {
    const { name, email, password, role, clinic_id } = req.body;
    const { administrativeSecretary_id } = req.params;
    const service = new UpdateAdministrativeSecretaryService();

    const result = await service.execute({
      administrativeSecretary_id,
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

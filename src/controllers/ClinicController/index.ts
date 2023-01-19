import { Request, Response } from 'express';
import { CreateClinicService } from '../../services/ClinicServices/CreateClinicService';
import { DeleteClinicService } from '../../services/ClinicServices/DeleteClinic';
import { ListAllClinicsService } from '../../services/ClinicServices/ListAllClinicService';
import { ListOneClinicService } from '../../services/ClinicServices/ListOneClinicService';
import { UpdateClinicService } from '../../services/ClinicServices/UpdateClinicService';

export class ClinicController {
  async create(req: Request, res: Response) {
    const { name, address_id } = req.body;

    const service = new CreateClinicService();

    const result = await service.execute({
      name,
      address_id,
    });

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.json(result);
  }

  async listOne(req: Request, res: Response) {
    const { param } = req.params;

    const service = new ListOneClinicService();

    const result = await service.execute({
      param,
    });

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.json(result);
  }

  async listAll(req: Request, res: Response) {
    const service = new ListAllClinicsService();

    const result = await service.execute();

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.json(result);
  }

  async delete(req: Request, res: Response) {
    const { query } = req.params;

    const service = new DeleteClinicService();

    const result = await service.execute({ query });

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.json(result);
  }

  async update(req: Request, res: Response) {
    const { name, address_id } = req.body;
    const { clinic_id } = req.params;
    const service = new UpdateClinicService();

    const result = await service.execute({
      clinic_id,
      name,
      address_id,
    });

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.json(result);
  }
}

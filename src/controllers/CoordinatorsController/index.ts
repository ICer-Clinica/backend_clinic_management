import { Request, Response } from 'express';
import { CreateCoordinatorService } from '../../services/CoordinatorsServices/CreateCoordinatorService';
import { DeleteCoordinatorService } from '../../services/CoordinatorsServices/DeleteCoordinatorService';
import { ListAllCoordinatorsService } from '../../services/CoordinatorsServices/ListAllCoordinatorService';
import { UpdateCoordinatorService } from '../../services/CoordinatorsServices/UpdateCoordinatorService';

export class CoordinatorController {
  async create(req: Request, res: Response) {
    const { name, email, clinic_id } = req.body;

    const service = new CreateCoordinatorService();

    const result = await service.execute({
      name,
      email,
      role: 'coordinator',
      clinic_id,
    });

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.json(result);
  }

  async listAll(req: Request, res: Response) {
    const { clinic_id } = req.params;

    const service = new ListAllCoordinatorsService();

    const result = await service.execute({ clinic_id });

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.json(result);
  }

  async delete(req: Request, res: Response) {
    const { coordinator_id } = req.params;

    const service = new DeleteCoordinatorService();

    const result = await service.execute({ coordinator_id });

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.json(result);
  }

  async update(req: Request, res: Response) {
    const { name, email, password, role, clinic_id } = req.body;
    const { coordinator_id } = req.params;
    const service = new UpdateCoordinatorService();

    const result = await service.execute({
      coordinator_id,
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

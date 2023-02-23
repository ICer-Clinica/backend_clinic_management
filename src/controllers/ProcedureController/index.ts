import { Request, Response } from 'express';
import { ProcedureArea } from '../../entities/ProcedureEntitie';
import { CreateProceduresService } from '../../services/ProceduresServices/CreateProcedureService';
import { DeleteProceduresService } from '../../services/ProceduresServices/DeleteProcedureService';
import { ListAllByClinicProcedureService } from '../../services/ProceduresServices/ListAllProcedureByClinicService';
import { UpdateProcedureService } from '../../services/ProceduresServices/UpdateProcedureService';

export class ProcedureController {
  async create(req: Request, res: Response) {
    const { code, name, clinic_id, area } = req.body;

    const service = new CreateProceduresService();

    if (area !== ProcedureArea.OCCUPATIONAL_THERAPY && area !== ProcedureArea.PHYSIOTHERAPY && area !== ProcedureArea.PSYCHOLOGY) {
      return new Error('Invalid area');
    }

    const result = await service.execute({
      code,
      name,
      clinic_id,
      area
    });

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.json(result);
  }

  async listAll(req: Request, res: Response) {
    const { clinic_id } = req.params;

    const service = new ListAllByClinicProcedureService();

    const result = await service.execute({ clinic_id });

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.json(result);
  }

  async delete(req: Request, res: Response) {
    const { procedure_id } = req.params;

    const service = new DeleteProceduresService();

    const result = await service.execute({ procedure_id });

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.json(result);
  }

  async update(req: Request, res: Response) {
    const { code, name, clinic_id, area } = req.body;
    const { procedure_id } = req.params;
    const service = new UpdateProcedureService();

    if (area !== ProcedureArea.OCCUPATIONAL_THERAPY && area !== ProcedureArea.PHYSIOTHERAPY && area !== ProcedureArea.PSYCHOLOGY) {
      return new Error('Invalid area');
    }

    const result = await service.execute({
      procedure_id,
      code,
      name,
      clinic_id,
      area
    });

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.json(result);
  }
}

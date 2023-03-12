import { Request, Response } from 'express';
import { UpdatePasswordService } from '../../services/UpdatePasswordService';

export class UpdatePasswordController {
  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { newPassword } = req.body;
    const service = new UpdatePasswordService();

    const result = await service.execute({
      user_id: id,
      newPassword,
      userPayload_id: req.userId
    });

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.json(result);
  }
}

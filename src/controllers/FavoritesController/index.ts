import { Request, Response } from 'express';
import { CreateFavoriteService } from '../../services/FavoritesServices/CreateFavoriteService';
import { DeleteFavoriteService } from '../../services/FavoritesServices/DeleteFavoriteService';
import { UpdateFavoriteService } from '../../services/FavoritesServices/UpdateFavoriteService';
import { ListAllByTherapistFavoriteService } from '../../services/FavoritesServices/ListFavoriteByTherapistAddress';
import { ListOneFavoriteService } from '../../services/FavoritesServices/ListOneFavoriteService';
import { ListAllFavoriteService } from '../../services/FavoritesServices/ListAllFavoriteService';

export class FavoritesController {
  async create(req: Request, res: Response) {
    const { therapist_id, patient_id } = req.body;

    const service = new CreateFavoriteService();

    const result = await service.execute({
      therapist_id,
      patient_id,
    });

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.json(result);
  }

  async listOne(req: Request, res: Response) {
    const { param } = req.params;

    const service = new ListOneFavoriteService();

    const result = await service.execute({
      param,
    });

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.json(result);
  }

  async listAll(req: Request, res: Response) {
    const service = new ListAllFavoriteService();

    const result = await service.execute();

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.json(result);
  }

  async delete(req: Request, res: Response) {
    const { query } = req.params;

    const service = new DeleteFavoriteService();

    const result = await service.execute({ query });

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.json(result);
  }

  async listAllByTherapist(req: Request, res: Response) {
    const { therapist_id } = req.params;

    const service = new ListAllByTherapistFavoriteService();

    const result = await service.execute({
      therapist_id,
    });

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.json(result);
  }

  async update(req: Request, res: Response) {
    const { therapist_id, patient_id } = req.body;
    const { favorite_id } = req.params;
    const service = new UpdateFavoriteService();

    const result = await service.execute({
      favorite_id,
      therapist_id,
      patient_id,
    });

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.json(result);
  }
}

import { getRepository, UpdateResult } from 'typeorm';
import { Favorite } from '../../entities/FavoriteEntitie';

type FavoriteRequest = {
  favorite_id: string;
  therapist_id: string;
  patient_id: string;
};

export class UpdateFavoriteService {
  async execute({ favorite_id, therapist_id, patient_id }: FavoriteRequest): Promise<Favorite | Error | UpdateResult> {
    const repo = getRepository(Favorite);

    const favoriteExists = await repo.findOne({
      where: { id: favorite_id },
      relations: ['therapist', 'patient'],
    });

    if (!favoriteExists) {
      return new Error('Favorite does not exists!');
    }

    favoriteExists.therapist_id = therapist_id;
    favoriteExists.patient_id = patient_id;

    await repo.save(favoriteExists);

    return favoriteExists;
  }
}

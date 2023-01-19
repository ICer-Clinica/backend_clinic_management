import { getRepository } from 'typeorm';
import { Favorite } from '../../entities/FavoriteEntitie';

type FavoritesRequest = {
  therapist_id: string;
  patient_id: string;
};

export class CreateFavoriteService {
  async execute({ therapist_id, patient_id }: FavoritesRequest): Promise<Favorite | Error> {
    const repo = getRepository(Favorite);

    const favoritesExists = await repo.findOne({ where: { therapist_id, patient_id } });

    if (favoritesExists?.therapist_id === therapist_id && favoritesExists?.patient_id === patient_id) {
      return new Error('Favorite already exists!');
    }

    const favorite = repo.create({
      therapist_id,
      patient_id,
    });

    await repo.save(favorite);

    return favorite;
  }
}

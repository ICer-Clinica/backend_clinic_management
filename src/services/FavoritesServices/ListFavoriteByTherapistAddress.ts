import { getRepository } from 'typeorm';
import { Favorite } from '../../entities/FavoriteEntitie';

type FavoriteRequest = {
  therapist_id?: string;
};

export class ListAllByTherapistFavoriteService {
  async execute({ therapist_id }: FavoriteRequest): Promise<Favorite[] | Error> {
    const repo = getRepository(Favorite);

    try {
      const favorite = await repo.find({ where: { therapist_id: therapist_id } });

      if (!favorite) {
        return new Error('Therapist does not have any Favorite!');
      }

      return favorite;
    } catch (error: any) {
      return new Error(error);
    }
  }
}

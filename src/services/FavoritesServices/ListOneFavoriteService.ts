import { getRepository } from 'typeorm';
import { Favorite } from '../../entities/FavoriteEntitie';

type FavoriteRequest = {
  param?: string;
};

export class ListOneFavoriteService {
  async execute({ param }: FavoriteRequest): Promise<Favorite | Error> {
    const repo = getRepository(Favorite);

    try {
      const favorite = await repo.findOne({ where: { id: param } });

      if (!favorite) {
        return new Error('Favorite does not exists!');
      }

      return favorite;
    } catch (error: any) {
      return new Error(error);
    }
  }
}

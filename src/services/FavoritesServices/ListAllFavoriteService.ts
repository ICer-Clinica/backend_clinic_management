import { getRepository } from 'typeorm';
import { Favorite } from '../../entities/FavoriteEntitie';

export class ListAllFavoriteService {
  async execute(): Promise<Favorite[] | Error> {
    const repo = getRepository(Favorite);

    try {
      const favorites = await repo.find();

      return favorites;
    } catch (error: any) {
      return new Error(error);
    }
  }
}

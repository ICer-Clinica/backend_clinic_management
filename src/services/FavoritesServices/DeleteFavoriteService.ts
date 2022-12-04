import { getRepository } from 'typeorm';
import { Favorite } from '../../entities/FavoriteEntitie';

type FavoriteRequest = {
  query: string;
};

export class DeleteFavoriteService {
  async execute({ query }: FavoriteRequest): Promise<'Favorite deleted!' | Error> {
    const repo = getRepository(Favorite);

    try {
      await repo.delete(query);

      return 'Favorite deleted!';
    } catch (error: any) {
      return new Error(error);
    }
  }
}

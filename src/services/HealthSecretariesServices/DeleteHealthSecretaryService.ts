import { getRepository } from 'typeorm';
import { HealthSecretary } from '../../entities/HealthSecretaryEntitie';

type HealthSecretaryRequest = {
  query: string;
};

export class DeleteHealthSecretaryService {
  async execute({ query }: HealthSecretaryRequest): Promise<'Health Secretary deleted!' | Error> {
    const repo = getRepository(HealthSecretary);

    try {
      await repo.delete(query);

      return 'Health Secretary deleted!';
    } catch (error: any) {
      return new Error(error);
    }
  }
}

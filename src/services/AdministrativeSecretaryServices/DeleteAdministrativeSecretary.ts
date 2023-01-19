import { getRepository } from 'typeorm';
import { AdministrativeSecretary } from '../../entities/AdministrativeSecretaryEntitie';

type AdministrativeSecretaryRequest = {
  admSecretary_id: string;
};

export class DeleteAdministrativeSecretary {
  async execute({
    admSecretary_id,
  }: AdministrativeSecretaryRequest): Promise<'Administrative Secretary deleted!' | Error> {
    const repo = getRepository(AdministrativeSecretary);

    try {
      await repo.delete(admSecretary_id);

      return 'Administrative Secretary deleted!';
    } catch (error: any) {
      return new Error(error);
    }
  }
}

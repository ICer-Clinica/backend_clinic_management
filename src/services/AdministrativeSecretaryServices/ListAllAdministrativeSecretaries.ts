import { getRepository } from 'typeorm';
import { AdministrativeSecretary } from '../../entities/AdministrativeSecretaryEntitie';

type AdministrativeSecretaryRequest = {
  clinic_id: string;
};

export class ListAllAdministrativeSecretaries {
  async execute({ clinic_id }: AdministrativeSecretaryRequest): Promise<AdministrativeSecretary[] | Error> {
    const repo = getRepository(AdministrativeSecretary);

    try {
      const admSecretaries = await repo.find({ where: { clinic_id } });

      if (!admSecretaries) {
        return new Error('Clinic does not have any Administrative Secretary.');
      }

      return admSecretaries;
    } catch (error: any) {
      return new Error(error);
    }
  }
}

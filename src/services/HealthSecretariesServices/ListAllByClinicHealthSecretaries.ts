import { getRepository } from 'typeorm';
import { HealthSecretary } from '../../entities/HealthSecretaryEntitie';

type HealthSecretaryRequest = {
  clinic_id: string;
};

export class ListAllByClinicHealthSecretariesService {
  async execute({ clinic_id }: HealthSecretaryRequest): Promise<HealthSecretary[] | Error> {
    const repo = getRepository(HealthSecretary);

    try {
      const healthSecretary = await repo.find({ where: { clinic_id: clinic_id } });

      return healthSecretary;
    } catch (error: any) {
      return new Error(error);
    }
  }
}

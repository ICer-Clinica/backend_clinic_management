import { getRepository } from 'typeorm';
import { HealthSecretary } from '../../entities/HealthSecretaryEntitie';

type HealthSecretaryRequest = {
  name: string;
  email: string;
  password: string;
  role: 'healthSecretary';
  clinic_id: string;
};

export class CreateHealthSecretaryService {
  async execute({ name, email, password, role, clinic_id }: HealthSecretaryRequest): Promise<HealthSecretary | Error> {
    const repo = getRepository(HealthSecretary);

    const healthSecretaryExists = await repo.findOne({ where: { email } });

    if (healthSecretaryExists) {
      return new Error('Health Secretary already exists!');
    }

    const healthSecretary = repo.create({
      name,
      email,
      password,
      role,
      clinic_id,
    });

    await repo.save(healthSecretary);

    return healthSecretary;
  }
}

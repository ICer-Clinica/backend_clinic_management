import { getRepository } from 'typeorm';
import { HealthSecretary } from '../../entities/HealthSecretaryEntitie';

type HealthSecretaryRequest = {
  healthSecretary_id: string;
  name: string;
  email: string;
  password: string;
  role: 'healthSecretary';
};

export class UpdateHealthSecretaryService {
  async execute({
    healthSecretary_id,
    name,
    email,
    password,
    role,
  }: HealthSecretaryRequest): Promise<HealthSecretary | Error> {
    const repo = getRepository(HealthSecretary);

    const healthSecretaryExists = await repo.findOne({ where: { id: healthSecretary_id } });

    if (!healthSecretaryExists) {
      return new Error('Health Secretary does not exists!');
    }

    healthSecretaryExists.name = name;
    healthSecretaryExists.email = email;
    healthSecretaryExists.password = password;
    healthSecretaryExists.role = role;

    await repo.save(healthSecretaryExists);

    return healthSecretaryExists;
  }
}

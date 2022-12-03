import { getRepository, UpdateEvent } from 'typeorm';
import { HealthSecretary } from '../../entities/HealthSecretary';

type HealthSecretaryRequest = {
  healthsecretary: string;
  name: string;
  email: string;
  password: string;
  role: 'healthSecretary';
};

export class UpdateHealthSecretaryService {
  async execute({
    healthsecretary,
    name,
    email,
    password,
    role,
  }: HealthSecretaryRequest): Promise<HealthSecretary | Error> {
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
    });

    await repo.save(healthSecretary);

    return healthSecretary;
  }
}

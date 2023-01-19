import { getRepository, UpdateEvent } from 'typeorm';
import { Clinic } from '../../entities/ClinicEntitie';
import { HealthSecretary } from '../../entities/HealthSecretaryEntitie';

type HealthSecretaryRequest = {
  healthSecretary_id: string;
  name: string;
  email: string;
  password: string;
  role: 'healthSecretary';
  clinic_id: string;
};

export class UpdateHealthSecretaryService {
  async execute({
    healthSecretary_id,
    name,
    email,
    password,
    role,
    clinic_id,
  }: HealthSecretaryRequest): Promise<HealthSecretary | Error> {
    const repo = getRepository(HealthSecretary);
    const clinicRepo = getRepository(Clinic);

    const healthSecretaryExists = await repo.findOne({ where: { id: healthSecretary_id } });

    if (!healthSecretaryExists) {
      return new Error('Health Secretary does not exists!');
    }
    const clinicExists = await clinicRepo.findOne({
      where: { id: clinic_id },
    });

    if (!clinicExists) {
      return new Error('Clinic not exists!');
    }

    healthSecretaryExists.name = name;
    healthSecretaryExists.email = email;
    healthSecretaryExists.password = password;
    healthSecretaryExists.role = role;
    healthSecretaryExists.clinic_id = clinic_id;

    await repo.save(healthSecretaryExists);

    return healthSecretaryExists;
  }
}

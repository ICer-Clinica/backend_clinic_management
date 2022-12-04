import { getRepository, UpdateResult } from 'typeorm';
import { AdministrativeSecretary } from '../../entities/AdministrativeSecretaryEntitie';
import { Clinic } from '../../entities/ClinicEntitie';

type AdministrativeSecretaryRequest = {
  administrativeSecretary_id: string;
  name: string;
  email: string;
  password: string;
  role: 'admnistrativeSecretary';
  clinic_id: string;
};

export class UpdateAdministrativeSecretaryService {
  async execute({
    administrativeSecretary_id,
    name,
    email,
    password,
    role,
    clinic_id,
  }: AdministrativeSecretaryRequest): Promise<AdministrativeSecretary | Error | UpdateResult> {
    const repo = getRepository(AdministrativeSecretary);
    const clinicRepo = getRepository(Clinic);

    const administrativeSecretaryExists = await repo.findOne({
      where: { id: administrativeSecretary_id },
      relations: ['clinic'],
    });

    const clinicExists = await clinicRepo.findOne({
      where: { id: clinic_id },
    });

    if (!administrativeSecretaryExists) {
      return new Error('Administrative Secretary does not exists!');
    }

    if (!clinicExists) {
      return new Error('Clinic does not exists!');
    }

    administrativeSecretaryExists.name = name;
    administrativeSecretaryExists.email = email;
    administrativeSecretaryExists.password = password;
    administrativeSecretaryExists.role = role;
    administrativeSecretaryExists.clinic_id = clinic_id;

    await repo.save(administrativeSecretaryExists);

    return administrativeSecretaryExists;
  }
}

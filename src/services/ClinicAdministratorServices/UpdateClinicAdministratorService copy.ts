import { getRepository, UpdateResult } from 'typeorm';
import { ClinicAdministrator } from '../../entities/ClinicAdministratorEntitie';
import { Clinic } from '../../entities/ClinicEntitie';

type ClinicAdministratorRequest = {
  clinicAdministrator_id: string;
  name: string;
  email: string;
  password: string;
  role: 'clinicAdm';
  clinic_id: string;
};

export class UpdateClinicAdministratorService {
  async execute({
    clinicAdministrator_id,
    name,
    email,
    password,
    role,
    clinic_id,
  }: ClinicAdministratorRequest): Promise<ClinicAdministrator | Error | UpdateResult> {
    const repo = getRepository(ClinicAdministrator);
    const repoClinic = getRepository(Clinic);

    const clinicAdministratorExists = await repo.findOne({
      where: { id: clinicAdministrator_id },
      relations: ['clinic'],
    });

    const clinicExists = await repoClinic.findOne({
      where: { id: clinic_id },
    });

    if (!clinicAdministratorExists) {
      return new Error('Clinic Administrator does not exists!');
    }

    if (!clinicExists) {
      return new Error('Clinic does not exists!');
    }

    clinicAdministratorExists.name = name;
    clinicAdministratorExists.email = email;
    clinicAdministratorExists.password = password;
    clinicAdministratorExists.role = role;
    clinicAdministratorExists.clinic_id = clinic_id;

    await repo.save(clinicAdministratorExists);

    return clinicAdministratorExists;
  }
}

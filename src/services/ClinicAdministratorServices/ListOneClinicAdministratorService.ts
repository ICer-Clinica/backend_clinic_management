import { getRepository } from 'typeorm';
import { ClinicAdministrator } from '../../entities/ClinicAdministratorEntitie';

type ClinicAdministratorRequest = {
  param?: string;
};

export class ListOneClinicAdministratorService {
  async execute({ param }: ClinicAdministratorRequest): Promise<ClinicAdministrator | Error> {
    const repo = getRepository(ClinicAdministrator);

    try {
      const clinicAdministrator = await repo.findOne({ where: { id: param } });

      if (!clinicAdministrator) {
        return new Error('Clinic Administrator does not exists!');
      }

      return clinicAdministrator;
    } catch (error: any) {
      return new Error(error);
    }
  }
}

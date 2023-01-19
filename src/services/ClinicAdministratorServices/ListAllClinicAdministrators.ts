import { getRepository } from 'typeorm';
import { ClinicAdministrator } from '../../entities/ClinicAdministratorEntitie';

export class ListAllClinicAdministratorsService {
  async execute(): Promise<ClinicAdministrator[] | Error> {
    const repo = getRepository(ClinicAdministrator);

    try {
      const clinicAdministrator = await repo.find({ relations: ['clinic'] });

      if (!clinicAdministrator) {
        return new Error('Clinic does not have any Clinic Administrators.');
      }

      return clinicAdministrator;
    } catch (error: any) {
      return new Error(error);
    }
  }
}

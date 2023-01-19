import { getRepository } from 'typeorm';
import { ClinicAdministrator } from '../../entities/ClinicAdministratorEntitie';

type ClinicAdministratorRequest = {
  clinicAdm_id: string;
};

export class DeleteClinicAdmService {
  async execute({ clinicAdm_id }: ClinicAdministratorRequest): Promise<'Clinic Administrator deleted!' | Error> {
    const repo = getRepository(ClinicAdministrator);

    try {
      await repo.delete(clinicAdm_id);

      return 'Clinic Administrator deleted!';
    } catch (error: any) {
      return new Error(error);
    }
  }
}

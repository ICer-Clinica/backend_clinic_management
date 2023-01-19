import { getRepository } from 'typeorm';
import { ClinicAdministrator } from '../../entities/ClinicAdministratorEntitie';

type ClinicAdministratorRequest = {
  clinic_id?: string;
  user_id?: string;
};

export class ListAllByClinicClinicAdministratorService {
  async execute({ clinic_id, user_id }: ClinicAdministratorRequest): Promise<ClinicAdministrator[] | Error> {
    const repo = getRepository(ClinicAdministrator);

    try {
      const clinicAdministrator = await repo.find({
        where: { clinic_id },
      });

      if (!clinicAdministrator) {
        ('');
        return new Error('Clinic Administrator does not exists!');
      }

      const result = clinicAdministrator.filter((adm) => {
        return adm.id !== user_id;
      });

      return result;
    } catch (error: any) {
      return new Error(error);
    }
  }
}

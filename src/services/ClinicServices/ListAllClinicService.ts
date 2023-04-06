import { getRepository } from 'typeorm';
import { Clinic } from '../../entities/ClinicEntitie';
import { ClinicAdministrator } from '../../entities/ClinicAdministratorEntitie';

export class ListAllClinicsService {
  async execute(): Promise<Clinic[] | Error | boolean> {
    const repo = getRepository(Clinic);
    const repoClinicAdm = getRepository(ClinicAdministrator);

    try {
      const clinics = await repo.find({ relations: ['address'] });
      const clinicAdms = await repoClinicAdm.find();

      const clinicsWithAdms = clinics.map(clinic => {
        const adms = clinicAdms.filter(adm => adm.clinic_id === clinic.id);
        return { ...clinic, administrator: adms[0] };
      });

      return clinicsWithAdms;
    } catch (error: any) {
      return new Error(error);
    }
  }
}

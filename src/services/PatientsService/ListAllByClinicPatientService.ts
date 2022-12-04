import { getRepository } from 'typeorm';
import { Patient } from '../../entities/PatientEntitie';

type PatientsRequest = {
  clinic_id: string;
};

export class ListAllPatientByClinicService {
  async execute({ clinic_id }: PatientsRequest): Promise<Patient[] | Error> {
    const repo = getRepository(Patient);

    try {
      const patients = await repo.find({ where: { clinic_id } });

      if (!patients) {
        return new Error('Clinic does not have any Patient.');
      }

      return patients;
    } catch (error: any) {
      return new Error(error);
    }
  }
}

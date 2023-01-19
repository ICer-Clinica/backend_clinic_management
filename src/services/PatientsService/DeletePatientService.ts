import { getRepository } from 'typeorm';
import { Patient } from '../../entities/PatientEntitie';

type PatientRequest = {
  patient_id: string;
};

export class DeletePatientService {
  async execute({ patient_id }: PatientRequest): Promise<'Patient deleted!' | Error> {
    const repo = getRepository(Patient);

    try {
      await repo.delete(patient_id);

      return 'Patient deleted!';
    } catch (error: any) {
      return new Error(error);
    }
  }
}

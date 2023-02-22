import { getRepository } from 'typeorm';
import { Patient } from '../../entities/PatientEntitie';

interface ItotalPatientsByClinic {
  clinic_id: string
}

export class TotalOfPatientsService {
  async totalPatients(): Promise<number | Error> {
    const repo = getRepository(Patient);

    try {
      const results = await repo.find();

      return results?.length;
    } catch (error: any) {
      return new Error(error);
    }
  }
  async totalPatientsByClinic({clinic_id}: ItotalPatientsByClinic): Promise<number | Error> {
    const repo = getRepository(Patient);

    try {
      const results = await repo.find({where: {clinic_id}});

      return results?.length;
    } catch (error: any) {
      return new Error(error);
    }
  }
}

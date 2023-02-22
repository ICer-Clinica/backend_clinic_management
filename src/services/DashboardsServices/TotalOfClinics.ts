import { getRepository } from 'typeorm';
import { Clinic } from '../../entities/ClinicEntitie';

export class TotalOfClinicsService {
  async execute(): Promise<number | Error> {
    const repo = getRepository(Clinic);

    try {
      const clinics = await repo.find();

      return clinics?.length;
    } catch (error: any) {
      return new Error(error);
    }
  }
}

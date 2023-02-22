import { getRepository } from 'typeorm';
import { Therapists } from '../../entities/TherapistEntitie';

interface ItotalTherapistsByClinic {
  clinic_id: string
}

export class TotalOfTherapistsService {
  async totalTherapists(): Promise<number | Error> {
    const repo = getRepository(Therapists);

    try {
      const results = await repo.find();

      return results?.length;
    } catch (error: any) {
      return new Error(error);
    }
  }
  async totalTherapistsByClinic({clinic_id}: ItotalTherapistsByClinic): Promise<number | Error> {
    const repo = getRepository(Therapists);

    try {
      const results = await repo.find({where: {clinic_id}});

      return results?.length;
    } catch (error: any) {
      return new Error(error);
    }
  }
}

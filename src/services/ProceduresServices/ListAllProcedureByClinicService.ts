import { getRepository } from 'typeorm';
import { Procedure } from '../../entities/ProcedureEntitie';

type ProcedureRequest = {
  clinic_id: string;
};

export class ListAllByClinicProcedureService {
  async execute({ clinic_id }: ProcedureRequest): Promise<Procedure[] | Error> {
    const repo = getRepository(Procedure);

    try {
      const procedures = await repo.find({ where: { clinic_id } });

      if (!procedures) {
        return new Error('Not Procedure for clinic.');
      }

      return procedures;
    } catch (error: any) {
      return new Error(error);
    }
  }
}

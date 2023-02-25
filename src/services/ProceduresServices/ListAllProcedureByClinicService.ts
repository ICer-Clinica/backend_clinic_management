import { getRepository } from 'typeorm';
import { Procedure } from '../../entities/ProcedureEntitie';
import { Therapists } from '../../entities/TherapistEntitie';

type ProcedureRequest = {
  clinic_id: string;
};

type IListByTherapist = {
  therapist_id: string
}

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
  async listByTherapist({ therapist_id }: IListByTherapist): Promise<Procedure[] | Error> {
    const repo = getRepository(Procedure);
    const repoTherapist = getRepository(Therapists);

    try {
      const therapist = await repoTherapist.findOne({where: {id: therapist_id}});

      if (!therapist) {
        return new Error('Therapist does not exists!');
      }

      const {office, clinic_id} = therapist;

      const procedures = await repo.find({ where: { clinic_id, area: office } });

      if (!procedures) {
        return new Error('Not Procedure for clinic.');
      }

      return procedures;
    } catch (error: any) {
      return new Error(error);
    }
  }
}

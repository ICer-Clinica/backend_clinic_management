import { getRepository } from 'typeorm';
import { Attendance } from '../../entities/AttendanceEntitie';
import { Clinic } from '../../entities/ClinicEntitie';
import { Therapists } from '../../entities/TherapistEntitie';

type AttendanceRequest = {
  therapist_id: string;
  clinic_id: string
};

export class ListServicesDoneByTherapist {
  async execute({ therapist_id, clinic_id }: AttendanceRequest): Promise<Attendance[] | Error> {
    try {      
      const repo = getRepository(Attendance);
      const therapistRepo = getRepository(Therapists);
      const clinicRepo = getRepository(Clinic);

      const therapistExists = await therapistRepo.findOne({
        where: { id: therapist_id },
      });

      const clinicExists = await clinicRepo.findOne({
        where: { id: clinic_id },
      });
  
      if (!therapistExists) {
        return new Error('Therapist does not exists!');
      }

      if (!clinicExists) {
        return new Error('Clinic does not exists!');
      }

      const attendances = await repo.find();

      const servicesDoneByTherapist = attendances?.filter((attendance: Attendance) => attendance?.therapist_id === therapist_id && attendance?.clinic_id === clinic_id);

      return servicesDoneByTherapist;
    } catch (error) {
      return new Error(error as string);
    }
  }
}

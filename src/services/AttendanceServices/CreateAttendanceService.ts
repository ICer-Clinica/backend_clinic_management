import { getRepository } from 'typeorm';
import { Attendance } from '../../entities/AttendanceEntitie';
import { Clinic } from '../../entities/ClinicEntitie';
import { Patient } from '../../entities/PatientEntitie';
import { Therapists } from '../../entities/TherapistEntitie';

type AttendanceRequest = {
  patient_id: string;
  therapist_id: string;
  clinic_id: string;
  procedures: string[]
};

export class CreateAttendanceService {
  async execute({ clinic_id, patient_id,procedures,therapist_id }: AttendanceRequest): Promise<Attendance | Error> {
    try {      
      const repo = getRepository(Attendance);
      const clinicRepo = getRepository(Clinic);
      const patientRepo = getRepository(Patient);
      const therapistRepo = getRepository(Therapists);

      const clinicExists = await clinicRepo.findOne({
        where: { id: clinic_id },
      });
      
      const patientExists = await patientRepo.findOne({
        where: { id: patient_id },
      });

      const therapistExists = await therapistRepo.findOne({
        where: { id: therapist_id },
      });
  
      if (!patientExists) {
        return new Error('Patient does not exists!');
      }
  
      if (!clinicExists) {
        return new Error('Clinic does not exists!');
      }

      if (!therapistExists) {
        return new Error('Therapist does not exists!');
      }

      const attendance = repo.create({
        clinic_id, 
        patient_id,
        procedures,
        therapist_id
      });

      await repo.save(attendance);

      return attendance;
    } catch (error) {
      return new Error(error as string);
    }
  }
}

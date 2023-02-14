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
  date_of_service: Date
  observations?: string
};

export class CreateAttendanceService {
  async execute({ clinic_id, patient_id,procedures,therapist_id, date_of_service, observations }: AttendanceRequest): Promise<Attendance | Error | true> {
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

      if (date_of_service?.setHours(0,0,0,0) > new Date()?.setHours(0,0,0,0)) {
        return new Error('It is not possible to give a future date!');
      }

      const attendance = repo.create({
        clinic_id, 
        patient_id,
        procedures,
        therapist_id,
        date_of_service: date_of_service?.toISOString(),
        observations
      });

      await repo.save(attendance);

      return attendance;
    } catch (error) {
      return new Error(error as string);
    }
  }
}

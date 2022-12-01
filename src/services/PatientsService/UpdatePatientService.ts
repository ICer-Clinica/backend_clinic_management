import { getRepository, UpdateResult } from 'typeorm';
import { Clinic } from '../../entities/ClinicEntitie';
import { Patient } from '../../entities/Patients';

type PatientRequest = {
  patient_id: string;
  name: string;
  sus_card: string;
  phone: string;
  cpf: string;
  birth_date: string;
  clinic_id: string;
};

export class UpdatePatientService {
  async execute({
    patient_id,
    name,
    sus_card,
    phone,
    cpf,
    birth_date,
    clinic_id,
  }: PatientRequest): Promise<Patient | Error | UpdateResult> {
    const repo = getRepository(Patient);
    const clinicRepo = getRepository(Clinic);

    const procedureExists = await repo.findOne({
      where: { id:patient_id },
    });

    const clinicExists = await clinicRepo.findOne({
      where: { id: clinic_id } 
    });

    if (!procedureExists) {
      return new Error('Procedure does not exists!');
    }

    if (!clinicExists) {
      return new Error('Clinic not exists!');
    }

    procedureExists.name = name;
    procedureExists.phone = phone;


    await repo.save(procedureExists);

    return procedureExists;
  }
}

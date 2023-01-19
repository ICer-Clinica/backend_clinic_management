import { getRepository } from 'typeorm';
import { Clinic } from '../../entities/ClinicEntitie';
import { Patient } from '../../entities/PatientEntitie';

type PatientRequest = {
  name: string;
  sus_card: string;
  phone: string;
  cpf: string;
  birth_date: string;
  clinic_id: string;
};

export class CreatePatientService {
  async execute({ name, sus_card, phone, cpf, birth_date, clinic_id }: PatientRequest): Promise<Patient | Error> {
    const repo = getRepository(Patient);
    const clinicRepo = getRepository(Clinic);

    const patientExists = await repo.findOne({
      where: { sus_card },
    });

    const clinicExists = await clinicRepo.findOne({ where: { id: clinic_id } });

    if (patientExists) {
      return new Error('Patient already exists!');
    }

    if (!clinicExists) {
      return new Error('Clinic does not exists!');
    }

    const patient = repo.create({
      name,
      sus_card,
      phone,
      cpf,
      birth_date,
      clinic_id,
    });

    await repo.save(patient);

    return patient;
  }
}

import { getRepository, UpdateResult } from 'typeorm';
import { Patient } from '../../entities/PatientEntitie';

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

    const patientExists = await repo.findOne({
      where: { id: patient_id },
      relations: ['clinic_id'],
    });

    if (!patientExists) {
      return new Error('Patient does not exists!');
    }

    patientExists.name = name;
    patientExists.sus_card = sus_card;
    patientExists.phone = phone;
    patientExists.cpf = cpf;
    patientExists.birth_date = birth_date;
    patientExists.clinic_id = clinic_id;

    await repo.save(patientExists);

    return patientExists;
  }
}

import { getRepository, UpdateResult } from 'typeorm';
import { Clinic } from '../../entities/ClinicEntitie';
import { Therapists } from '../../entities/TherapistEntitie';

type TherapistRequest = {
  therapist_id: string;
  name: string;
  email: string;
  password: string;
  role: 'therapist';
  office: string;
  clinic_id: string;
};

export class UpdateTherapistService {
  async execute({
    therapist_id,
    name,
    email,
    password,
    role,
    office,
    clinic_id,
  }: TherapistRequest): Promise<Therapists | Error | UpdateResult> {
    const repo = getRepository(Therapists);
    const clinicRepo = getRepository(Clinic);

    const therapistExists = await repo.findOne({
      where: { id:therapist_id },
      relations: ['clinic'],
    });
    const clinicExists = await clinicRepo.findOne({ where: { id: clinic_id } });

    if (!therapistExists) {
      return new Error('Therapist does not exists!');
    }

    if (!clinicExists) {
      return new Error('Clinic not exists!');
    }

    therapistExists.name = name;
    therapistExists.email = email;
    therapistExists.password = password;
    therapistExists.office = office;

    await repo.save(therapistExists);

    return therapistExists;
  }
}

import { getRepository } from 'typeorm';
import { Clinic } from '../../entities/ClinicEntitie';
import { TherapistRole, Therapists } from '../../entities/TherapistEntitie';
import SendEmailMiddleware from '../../middlewares/SendEmailMiddleware';

type ClinicAdministratorRequest = {
  name: string;
  email: string;
  role: 'therapist';
  office: TherapistRole;
  cns: string;
  clinic_id: string;
};

export class CreateTherapistService {
  async execute({
    name,
    email,
    role,
    office,
    cns,
    clinic_id,
  }: ClinicAdministratorRequest): Promise<Therapists | Error> {
    const repo = getRepository(Therapists);
    const clinicRepo = getRepository(Clinic);

    const therapistExists = await repo.findOne({
      where: { email },
      relations: ['clinic'],
    });
    const clinicExists = await clinicRepo.findOne({ where: { id: clinic_id } });

    if (therapistExists) {
      return new Error('Therapist already exists!');
    }

    if (!clinicExists) {
      return new Error('Clinic not exists!');
    }

    const min = Number(process.env.LOWER_NUMBER_PASSWORD);
    const max = Number(process.env.MAY_NUMBER_PASSWORD);
    const password = Math.floor(Math.random() * (max - min) + min);

    try {
      await SendEmailMiddleware(password?.toString(), email);

      const therapist = repo.create({
        name,
        email,
        password: password?.toString(),
        role,
        office,
        cns,
        clinic_id,
      });

      await repo.save(therapist);

      return therapist;
    } catch (error) {
      return new Error(`Error: ${error}`);
    }
  }
}

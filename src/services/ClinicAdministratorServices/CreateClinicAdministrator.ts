import { getRepository } from 'typeorm';
import { ClinicAdministrator } from '../../entities/ClinicAdministratorEntitie';
import { Clinic } from '../../entities/ClinicEntitie';
import SendEmailMiddleware from '../../middlewares/SendEmailMiddleware';

type ClinicAdministratorRequest = {
  name: string;
  email: string;
  role: 'clinicAdm';
  clinic_id: string;
};

export class CreateClinicAdministratorService {
  async execute({
    name,
    email,
    role,
    clinic_id,
  }: ClinicAdministratorRequest): Promise<ClinicAdministrator | Error> {
    const repo = getRepository(ClinicAdministrator);
    const clinicRepo = getRepository(Clinic);

    const clinicAdministratorExists = await repo.findOne({
      where: { email },
      relations: ['clinic'],
    });
    const clinicExists = await clinicRepo.findOne({ where: { id: clinic_id } });

    if (clinicAdministratorExists) {
      return new Error('Clinic Administrator already exists!');
    }

    if (!clinicExists) {
      return new Error('Clinic not exists!');
    }

    const min = Number(process.env.LOWER_NUMBER_PASSWORD);
    const max = Number(process.env.MAY_NUMBER_PASSWORD);
    const password = Math.floor(Math.random() * (max - min) + min);

    try {
      await SendEmailMiddleware(password?.toString(), email);

      const clinicAdministrator = repo.create({
        name,
        email,
        password: password?.toString(),
        role,
        clinic_id,
      });

      await repo.save(clinicAdministrator);

      return clinicAdministrator;
    } catch (error) {
      return new Error(`Error: ${error}`);
    }
  }
}

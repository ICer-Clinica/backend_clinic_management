import { getRepository } from 'typeorm';
import { AdministrativeSecretary } from '../../entities/AdministrativeSecretaryEntitie';
import { Clinic } from '../../entities/ClinicEntitie';
import SendEmailMiddleware from '../../middlewares/SendEmailMiddleware';

type AdministrativeSecretaryRequest = {
  name: string;
  email: string;
  role: 'admnistrativeSecretary';
  clinic_id: string;
};

export class CreateAdministrativeSecretaryService {
  async execute({
    name,
    email,
    role,
    clinic_id,
  }: AdministrativeSecretaryRequest): Promise<AdministrativeSecretary | Error> {
    const repo = getRepository(AdministrativeSecretary);
    const clinicRepo = getRepository(Clinic);

    const administrativeSecretaryExists = await repo.findOne({
      where: { email },
      relations: ['clinic'],
    });
    const clinicExists = await clinicRepo.findOne({ where: { id: clinic_id } });

    if (administrativeSecretaryExists) {
      return new Error('Administrative Secretary already exists!');
    }

    if (!clinicExists) {
      return new Error('Clinic not exists!');
    }

    const min = Number(process.env.LOWER_NUMBER_PASSWORD);
    const max = Number(process.env.MAY_NUMBER_PASSWORD);
    const password = Math.floor(Math.random() * (max - min) + min);

    if (!password) {
      return new Error('Unable to generate a password');
    }

    try {
      await SendEmailMiddleware(password?.toString(), email);

      const administrativeSecretary = repo.create({
        name,
        email,
        password: password?.toString(),
        role,
        clinic_id,
      });

      await repo.save(administrativeSecretary);

      return administrativeSecretary;
    } catch (error) {
      return new Error(`Error: ${error}`);
    }


  }
}

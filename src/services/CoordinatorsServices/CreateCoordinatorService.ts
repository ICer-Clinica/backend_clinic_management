import { getRepository } from 'typeorm';
import { Clinic } from '../../entities/ClinicEntitie';
import { Coordinator } from '../../entities/CoordinatorEntitie';
import SendEmailMiddleware from '../../middlewares/SendEmailMiddleware';

type CoordinatorRequest = {
  name: string;
  email: string;
  role: 'coordinator';
  clinic_id: string;
};

export class CreateCoordinatorService {
  async execute({ name, email, role, clinic_id }: CoordinatorRequest): Promise<Coordinator | Error | any> {
    const repo = getRepository(Coordinator);
    const repoClinic = getRepository(Clinic);

    const coordinatorExists = await repo.findOne({ where: { email } });

    const clinicExists = await repoClinic.findOne({ where: { id: clinic_id } });

    if (coordinatorExists) {
      return new Error('Coordinator already exists!');
    }

    if (!clinicExists) {
      return new Error('Clinic does not exists');
    }

    const min = Number(process.env.LOWER_NUMBER_PASSWORD);
    const max = Number(process.env.MAY_NUMBER_PASSWORD);
    const password = Math.floor(Math.random() * (max - min) + min);

    if (!password) {
      return new Error('Unable to generate a password');
    }

    try {
      await SendEmailMiddleware(password?.toString(), email);

      const coordinator = repo.create({
        name,
        email,
        password: password?.toString(),
        role,
        clinic_id,
      });

      await repo.save(coordinator);

      return coordinator;
    } catch (error) {
      return new Error(`Error: ${error}`);
    }
  }
}

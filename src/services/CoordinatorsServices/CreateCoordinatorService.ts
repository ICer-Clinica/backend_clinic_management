import { getRepository } from 'typeorm';
import { Clinic } from '../../entities/ClinicEntitie';
import { Coordinator } from '../../entities/CoordinatorEntitie';

type CoordinatorRequest = {
  name: string;
  email: string;
  password: string;
  role: 'coordinator';
  clinic_id: string;
};

export class CreateCoordinatorService {
  async execute({ name, email, password, role, clinic_id }: CoordinatorRequest): Promise<Coordinator | Error> {
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

    const coordinator = repo.create({
      name,
      email,
      password,
      role,
      clinic_id,
    });

    await repo.save(coordinator);

    return coordinator;
  }
}

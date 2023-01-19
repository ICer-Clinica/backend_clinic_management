import { getRepository, UpdateResult } from 'typeorm';
import { Clinic } from '../../entities/ClinicEntitie';
import { Coordinator } from '../../entities/CoordinatorEntitie';

type CoordinatorRequest = {
  coordinator_id: string;
  name: string;
  email: string;
  password: string;
  role: 'coordinator';
  clinic_id: string;
};

export class UpdateCoordinatorService {
  async execute({
    coordinator_id,
    name,
    email,
    password,
    role,
    clinic_id,
  }: CoordinatorRequest): Promise<Coordinator | Error | UpdateResult> {
    const repo = getRepository(Coordinator);
    const repoClinic = getRepository(Clinic);

    const coordinatorExists = await repo.findOne({
      where: { id: coordinator_id },
      relations: ['clinic'],
    });

    const clinicExists = await repoClinic.findOne({ where: { id: clinic_id } });

    if (!coordinatorExists) {
      return new Error('Coordinator does not exists!');
    }

    if (!clinicExists) {
      return new Error('Clinic does not exists');
    }

    coordinatorExists.name = name;
    coordinatorExists.email = email;
    coordinatorExists.password = password;
    coordinatorExists.role = role;
    coordinatorExists.clinic_id = clinic_id;

    await repo.save(coordinatorExists);

    return coordinatorExists;
  }
}

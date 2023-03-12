import { getRepository, Repository, UpdateResult } from 'typeorm';
import { AdministrativeSecretary } from '../../entities/AdministrativeSecretaryEntitie';
import { ClinicAdministrator } from '../../entities/ClinicAdministratorEntitie';
import { Coordinator } from '../../entities/CoordinatorEntitie';
import { HealthSecretary } from '../../entities/HealthSecretaryEntitie';
import { Superadmin } from '../../entities/SuperadminEntitie';
import { Therapists } from '../../entities/TherapistEntitie';

type UpdatePasswordRequest = {
  user_id: string
  newPassword: string
  userPayload_id: string
};

export class UpdatePasswordService {
  async execute({
    user_id,
    newPassword,
    userPayload_id
  }: UpdatePasswordRequest): Promise<ClinicAdministrator | Error | UpdateResult> {
    const superadminRepo = getRepository(Superadmin);
    const clinicAdmRepo = getRepository(ClinicAdministrator);
    const coordinatorRepo = getRepository(Coordinator);
    const admSecretaryRepo = getRepository(AdministrativeSecretary);
    const healthSecretaryRepo = getRepository(HealthSecretary);
    const therapistRepo = getRepository(Therapists);

    try {

      if (user_id !== userPayload_id) {
        return new Error('You cannot change another user password');
      }

      let user = {} as Superadmin | ClinicAdministrator | any;
      let repo: Repository<Superadmin | ClinicAdministrator | Coordinator | AdministrativeSecretary | HealthSecretary | Therapists> | null | any;

      const isSuperadmin = await superadminRepo.findOne({ where: { id: user_id } });
      const isClinicAdm = await clinicAdmRepo.findOne({ where: { id: user_id } });
      const isCoordinator = await coordinatorRepo.findOne({ where: { id: user_id } });
      const isAdmSecretary = await admSecretaryRepo.findOne({ where: { id: user_id } });
      const isHealthSecretary = await healthSecretaryRepo.findOne({ where: { id: user_id } });
      const isTherapist = await therapistRepo.findOne({ where: { id: user_id } });

      if (isSuperadmin) {
        user = isSuperadmin;
        repo = superadminRepo;
      } else if (isClinicAdm) {
        user = isClinicAdm;
        repo = clinicAdmRepo;
      } else if (isCoordinator) {
        user = isCoordinator;
        repo = coordinatorRepo;
      } else if (isAdmSecretary) {
        user = isAdmSecretary;
        repo = admSecretaryRepo;
      } else if (isHealthSecretary) {
        user = isHealthSecretary;
        repo = healthSecretaryRepo;
      } else if (isTherapist) {
        user = isTherapist;
        repo = therapistRepo;
      } else {
        return new Error('User does not exists.');
      }

      user.password = newPassword;

      await repo.save(user);

      return user;
    } catch (error: any) {
      return new Error(error);
    }
  }
}

import { getRepository, UpdateResult } from 'typeorm';
import { Clinic } from '../../entities/ClinicEntitie';

type ClinicRequest = {
  clinic_id: string;
  name: string;
  address_id: string;
};

export class UpdateClinicService {
  async execute({clinic_id, name, address_id }: ClinicRequest): Promise<Clinic | Error | UpdateResult> {
    const repo = getRepository(Clinic);

    const clinicExists = await repo.findOne({
      where: { id:clinic_id },
      relations: ['address'],
    });

    if (!clinicExists) {
      return new Error('Clinic does not exists!');
    }

    clinicExists.name = name;
    clinicExists.address_id = address_id;

    await repo.save(clinicExists);

    return clinicExists;
  }
}
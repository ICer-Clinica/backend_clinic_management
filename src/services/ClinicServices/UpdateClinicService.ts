import { getRepository, UpdateResult } from 'typeorm';
import { Address } from '../../entities/AddressEntitie';
import { Clinic } from '../../entities/ClinicEntitie';

type ClinicRequest = {
  clinic_id: string;
  name: string;
  address_id: string;
};

export class UpdateClinicService {
  async execute({ clinic_id, name, address_id }: ClinicRequest): Promise<Clinic | Error | UpdateResult> {
    const repo = getRepository(Clinic);
    const repoAddress = getRepository(Address);

    const clinicExists = await repo.findOne({
      where: { id: clinic_id },
      relations: ['address'],
    });

    const addressExists = await repoAddress.findOne({
      where: { id: address_id },
    });

    if (!clinicExists) {
      return new Error('Clinic does not exists!');
    }

    if (!addressExists) {
      return new Error('Address does not exists!');
    }

    clinicExists.name = name;
    clinicExists.address_id = address_id;

    await repo.save(clinicExists);

    return clinicExists;
  }
}

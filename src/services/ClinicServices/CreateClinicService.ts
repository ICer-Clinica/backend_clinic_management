import { getRepository } from 'typeorm';
import { Clinic } from '../../entities/ClinicEntitie';

type ClinicRequest = {
  name: string;
  cnpj: string;
  email?: string;
  phone: string;
  address_id: string;
};

export class CreateClinicService {
  async execute({ name, cnpj, email, phone, address_id }: ClinicRequest): Promise<Clinic | Error> {
    const repo = getRepository(Clinic);

    const clinicExists = await repo.findOne({
      where: { name },
      relations: ['address'],
    });

    if (clinicExists) {
      return new Error('Clinic already exists!');
    }

    const clinic = repo.create({
      name,
      address_id,
      cnpj,
      email,
      phone
    });

    await repo.save(clinic);

    return clinic;
  }
}

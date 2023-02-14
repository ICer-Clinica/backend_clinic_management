import { getRepository } from 'typeorm';
import { Address } from '../../entities/AddressEntitie';

type AddressRequest = {
  street: string;
  number: number;
  district: string;
  zip: string;
  city: string;
  state: string;
};

export class CreateAddressService {
  async execute({
    street,
    number,
    district,
    zip,
    city,
    state
  }: AddressRequest): Promise<Address | Error> {
    const repo = getRepository(Address);

    const addressExists = await repo.findOne({ where: { street } });

    if (
      addressExists?.street === street &&
      addressExists?.number === number &&
      addressExists?.district === district &&
      addressExists?.zip === zip &&
      addressExists?.city === city &&
      addressExists?.city === state
    ) {
      return new Error('Address already exists!');
    }

    const address = repo.create({
      street,
      number,
      district,
      zip,
      city,
      state
    });

    await repo.save(address);

    return address;
  }
}

import { getRepository, UpdateResult } from 'typeorm';
import { Address } from '../../entities/AddressEntitie';

type AddressRequest = {
  address_id: string;
  street: string;
  number: number;
  district: string;
};

export class UpdateAddressService {
  async execute({ address_id, street, number, district }: AddressRequest): Promise<Address | Error | UpdateResult> {
    const repo = getRepository(Address);

    const addressExists = await repo.findOne({
      where: { id: address_id },
    });

    if (!addressExists) {
      return new Error('Address does not exists!');
    }

    addressExists.street = street;
    addressExists.number = number;
    addressExists.district = district;

    await repo.save(addressExists);

    return addressExists;
  }
}

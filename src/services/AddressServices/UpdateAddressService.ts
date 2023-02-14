import { getRepository, UpdateResult } from 'typeorm';
import { Address } from '../../entities/AddressEntitie';

type AddressRequest = {
  address_id: string;
  street: string;
  number: number;
  district: string;
  zip: string;
  city: string;
  state: string;
};

export class UpdateAddressService {
  async execute({ address_id, street, number, district, zip,
    city,
    state }: AddressRequest): Promise<Address | Error | UpdateResult> {
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
    addressExists.zip = zip;
    addressExists.city = city;
    addressExists.city = state;

    await repo.save(addressExists);

    return addressExists;
  }
}

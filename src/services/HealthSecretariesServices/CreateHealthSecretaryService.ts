import { getRepository } from 'typeorm';
import { HealthSecretary } from '../../entities/HealthSecretaryEntitie';
import SendEmailMiddleware from '../../middlewares/SendEmailMiddleware';

type HealthSecretaryRequest = {
  name: string;
  email: string;
  role: 'healthSecretary';
};

export class CreateHealthSecretaryService {
  async execute({ name, email, role }: HealthSecretaryRequest): Promise<HealthSecretary | Error> {
    const repo = getRepository(HealthSecretary);


    const healthSecretaryExists = await repo.findOne({ where: { email } });


    if (healthSecretaryExists) {
      return new Error('Health Secretary already exists!');
    }

    const min = Number(process.env.LOWER_NUMBER_PASSWORD);
    const max = Number(process.env.MAY_NUMBER_PASSWORD);
    const password = Math.floor(Math.random() * (max - min) + min);

    try {
      await SendEmailMiddleware(password?.toString(), email);

      const healthSecretary = repo.create({
        name,
        email,
        password: password?.toString(),
        role,
      });

      await repo.save(healthSecretary);

      return healthSecretary;
    } catch (error) {
      return new Error(`Error: ${error}`);
    }
  }
}

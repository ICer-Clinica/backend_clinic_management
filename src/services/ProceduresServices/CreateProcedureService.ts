import { getRepository } from 'typeorm';
import { Clinic } from '../../entities/ClinicEntitie';
import { Procedure, ProcedureArea } from '../../entities/ProcedureEntitie';

type ProceduresRequest = {
  code: string;
  name: string;
  clinic_id: string;
  area: ProcedureArea
};

type Procedures = {
  procedure: ProceduresRequest[]
}

export class CreateProceduresService {
  async execute({
    code,
    name,
    clinic_id,
    area
  }: ProceduresRequest): Promise<Procedure | Error> {
    const repo = getRepository(Procedure);
    const clinicRepo = getRepository(Clinic);

    const procedureExists = await repo.findOne({
      where: { name },
    });

    const clinicExists = await clinicRepo.findOne({ where: { id: clinic_id } });

    if (procedureExists) {
      return new Error('Procedure already exists!');
    }

    if (!clinicExists) {
      return new Error('Clinic not exists!');
    }

    const procedure = repo.create({
      code,
      name,
      clinic_id,
      area
    });

    await repo.save(procedure);

    return procedure;
  }
  async createProcedures({
    procedure: createProcedure
  }: Procedures): Promise<Procedure[] | Error> {
    const repo = getRepository(Procedure);
    const clinicRepo = getRepository(Clinic);

    const procedures: Procedure[] = [];

    createProcedure?.forEach(async (procedure) => {
      const procedureExists = await repo.findOne({where: {code: procedure.code}});
      const clinicExists = await clinicRepo.findOne({where: {id: procedure?.clinic_id}});

      if (procedureExists) {
        return new Error('Procedure already exists!');
      }
  
      if (!clinicExists) {
        return new Error('Clinic not exists!');
      }

      const procedureCreate = repo.create({
        code: procedure.code,
        name: procedure.name,
        clinic_id: procedure.clinic_id,
        area: procedure.area
      });
  
      await repo.save(procedureCreate);

      procedures.push(procedureCreate);
    });

    return procedures;
  }
}

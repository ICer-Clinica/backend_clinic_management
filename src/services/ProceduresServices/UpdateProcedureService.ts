import { getRepository, UpdateResult } from 'typeorm';
import { Procedure } from '../../entities/ProcedureEntitie';

type ProcedureRequest = {
  procedure_id: string;
  code: string;
  name: string;
  clinic_id: string;
};

export class UpdateProcedureService {
  async execute({ procedure_id, code, name, clinic_id }: ProcedureRequest): Promise<Procedure | Error | UpdateResult> {
    const repo = getRepository(Procedure);

    const procedureExists = await repo.findOne({
      where: { id: procedure_id },
      relations: ['clinic'],
    });

    if (!procedureExists) {
      return new Error('Clinic does not exists!');
    }

    procedureExists.code = code;
    procedureExists.name = name;
    procedureExists.clinic_id = clinic_id;

    await repo.save(procedureExists);

    return procedureExists;
  }
}

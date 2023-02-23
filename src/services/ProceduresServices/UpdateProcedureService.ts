import { getRepository, UpdateResult } from 'typeorm';
import { Procedure, ProcedureArea } from '../../entities/ProcedureEntitie';

type ProcedureRequest = {
  procedure_id: string;
  code: string;
  name: string;
  clinic_id: string;
  area: ProcedureArea
};

export class UpdateProcedureService {
  async execute({ procedure_id, code, name, clinic_id, area }: ProcedureRequest): Promise<Procedure | Error | UpdateResult> {
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
    procedureExists.area = area;

    await repo.save(procedureExists);

    return procedureExists;
  }
}

import { getRepository } from 'typeorm';
import { Procedure } from '../../entities/ProcedureEntitie';

type ProcedureRequest = {
  procedure_id: string;
};

export class DeleteProceduresService {
  async execute({ procedure_id }: ProcedureRequest): Promise<'Procedure deleted!' | Error> {
    const repo = getRepository(Procedure);

    try {
      await repo.delete(procedure_id);

      return 'Procedure deleted!';
    } catch (error: any) {
      return new Error(error);
    }
  }
}

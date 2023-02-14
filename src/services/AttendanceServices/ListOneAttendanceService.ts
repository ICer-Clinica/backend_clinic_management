import { getRepository } from 'typeorm';
import { Attendance } from '../../entities/AttendanceEntitie';

type AttendanceRequest = {
  attendance_id: string
};

export class ListOneAttendanceService {
  async execute({ attendance_id }: AttendanceRequest): Promise<Attendance | Error> {
    try {      
      const repo = getRepository(Attendance);
      
      const attendance = await repo.findOne({
        where: {id: attendance_id},
        relations: ['clinic', 'therapists', 'patient']
      });

      if (!attendance) {
        return new Error('Attendance does not exists!');
      }

      return attendance;
    } catch (error) {
      return new Error(error as string);
    }
  }
}

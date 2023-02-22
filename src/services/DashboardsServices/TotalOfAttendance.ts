import { getRepository } from 'typeorm';
import { Attendance } from '../../entities/AttendanceEntitie';

interface ITotalAttendanceByClinic {
  clinic_id: string
}

export class TotalOfAttendanceService {
  async totalAttendances(): Promise<number | Error> {
    const repo = getRepository(Attendance);

    try {
      const results = await repo.find();

      return results?.length;
    } catch (error: any) {
      return new Error(error);
    }
  }
  async totalAttendancesByClinic({clinic_id}: ITotalAttendanceByClinic): Promise<number | Error> {
    const repo = getRepository(Attendance);

    try {
      const results = await repo.find({where: {clinic_id}});

      return results?.length;
    } catch (error: any) {
      return new Error(error);
    }
  }
  async totalAttendancesThisMonth(): Promise<number | Error> {
    const repo = getRepository(Attendance);    

    try {
      const results: Attendance[] = await repo.find();

      console.log(results);
      
      results?.filter((attendance) => new Date(attendance?.date_of_service)?.toLocaleString('default', { month: 'numeric' }) === new Date()?.toLocaleString('default', { month: 'numeric' }));

      return results?.length;
    } catch (error: any) {
      return new Error(error);
    }
  }
  async totalAttendancesByClinicThisMonth({clinic_id}: ITotalAttendanceByClinic): Promise<number | Error> {
    const repo = getRepository(Attendance);

    try {
      const results: Attendance[] = await repo.find({where: {clinic_id}});

      results?.filter((attendance) => new Date(attendance?.date_of_service)?.toLocaleString('default', { month: 'numeric' }) === new Date()?.toLocaleString('default', { month: 'numeric' }));

      return results?.length;
    } catch (error: any) {
      return new Error(error);
    }
  }
}

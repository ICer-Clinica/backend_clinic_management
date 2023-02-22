/* eslint-disable no-prototype-builtins */
import { getRepository } from 'typeorm';
import { Attendance } from '../../entities/AttendanceEntitie';
import { Clinic } from '../../entities/ClinicEntitie';

interface ITotalAttendanceByClinic {
  clinic_id: string
}

interface IRanking {
  clinicName: string
  attendances: number
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
  async rankingOfClinics(): Promise<IRanking[] | Error | Attendance[]> {
    const repo = getRepository(Attendance);

    try {

      const results: Attendance[] = await repo.find({relations: ['clinic']});

      const counts = {};
      results.forEach((obj) => {
        const { name } = obj.clinic;
        counts[name] = counts[name] ? counts[name] + 1 : 1;
      });

      const arr: IRanking[] = [];
      for (const key in counts) {
        if (counts.hasOwnProperty(key)) {
          arr.push({ clinicName: key, attendances: counts[key] });
        }
      }
      return arr;
    } catch (error: any) {
      return new Error(error);
    }
  }
}

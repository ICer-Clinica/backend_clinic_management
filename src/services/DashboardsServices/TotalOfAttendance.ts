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

interface IRankingOfTherapists {
  clinic_id: string
}

interface IRankingTherapists {
  therapistName: string
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
      
      const filteredResults = results?.filter((attendance) => new Date(attendance?.date_of_service)?.toLocaleString('default', { month: 'numeric' }) === new Date()?.toLocaleString('default', { month: 'numeric' }));

      return filteredResults?.length;
    } catch (error: any) {
      return new Error(error);
    }
  }
  async totalAttendancesByClinicThisMonth({clinic_id}: ITotalAttendanceByClinic): Promise<number | Error> {
    const repo = getRepository(Attendance);

    try {
      const results: Attendance[] = await repo.find({where: {clinic_id}});

      const filteredResults = results?.filter((attendance) => new Date(attendance?.date_of_service)?.toLocaleString('default', { month: 'numeric' }) === new Date()?.toLocaleString('default', { month: 'numeric' }));

      return filteredResults?.length;
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
  async rankingOfClinicsThisMonth(): Promise<IRanking[] | Error | Attendance[]> {
    const repo = getRepository(Attendance);

    try {

      const results: Attendance[] = await repo.find({relations: ['clinic']});

      const filteredResults = results?.filter((attendance) => new Date(attendance?.date_of_service)?.toLocaleString('default', { month: 'numeric' }) === new Date()?.toLocaleString('default', { month: 'numeric' }));

      const counts = {};
      filteredResults.forEach((obj) => {
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
  async rankingOfTherapists({clinic_id}: IRankingOfTherapists): Promise<IRanking[] | Error | Attendance[] | any> {
    const repo = getRepository(Attendance);

    try {

      const results: Attendance[] = await repo.find({where: {clinic_id} ,relations: ['therapists']});

      const counts = {};
      results.forEach((obj) => {
        const { name } = obj.therapists;
        counts[name] = counts[name] ? counts[name] + 1 : 1;
      });

      const arr: IRankingTherapists[] = [];
      for (const key in counts) {
        if (counts.hasOwnProperty(key)) {
          arr.push({ therapistName: key, attendances: counts[key] });
        }
      }
      return arr;
    } catch (error: any) {
      return new Error(error);
    }
  }
  async rankingOfTherapistsThisMonth({clinic_id}: IRankingOfTherapists): Promise<IRanking[] | Error | Attendance[] | any> {
    const repo = getRepository(Attendance);

    try {

      const results: Attendance[] = await repo.find({where: {clinic_id} ,relations: ['therapists']});

      const filteredResults = results?.filter((attendance) => new Date(attendance?.date_of_service)?.toLocaleString('default', { month: 'numeric' }) === new Date()?.toLocaleString('default', { month: 'numeric' }));

      const counts = {};
      filteredResults.forEach((obj) => {
        const { name } = obj.therapists;
        counts[name] = counts[name] ? counts[name] + 1 : 1;
      });

      const arr: IRankingTherapists[] = [];
      for (const key in counts) {
        if (counts.hasOwnProperty(key)) {
          arr.push({ therapistName: key, attendances: counts[key] });
        }
      }
      return arr;
    } catch (error: any) {
      return new Error(error);
    }
  }
}

import { getRepository } from 'typeorm';
import { Favorite } from '../../entities/FavoriteEntitie';
import { Patient } from '../../entities/PatientEntitie';

type FavoriteRequest = {
  therapist_id?: string;
};

type FavoriteResponse = Favorite & {
  patient: Patient;
};

export class ListAllByTherapistFavoriteService {
  async execute({ therapist_id }: FavoriteRequest): Promise<FavoriteResponse[] | Error> {
    const favoritesRepo = getRepository(Favorite);
    const patientsRepo = getRepository(Patient);

    try {
      const favorites = await favoritesRepo.find({ where: { therapist_id: therapist_id } });

      if (favorites) {
        const data = favorites.map(async (favorite) => {
          const [patient] = await patientsRepo.find({ where: { id: favorite.patient_id } });
          return { ...favorite, patient };
        });
        const response = await Promise.all(data);

        return response;
      }

      return [];
    } catch (error: any) {
      return new Error(error);
    }
  }
}

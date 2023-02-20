import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Patient } from './PatientEntitie';
import { Therapists } from './TherapistEntitie';

@Entity('favorites')
export class Favorite {
  @PrimaryGeneratedColumn('uuid')
    id: string;

  @Column()
    therapist_id: string;

  @Column()
    patient_id: string;

  @ManyToOne(() => Therapists)
  @JoinColumn({ name: 'therapist_id' })
    therapist: Therapists;

  @ManyToOne(() => Patient)
  @JoinColumn({ name: 'patient_id' })
    patient: Patient;

  // @CreateDateColumn()
  //   created_at: Date;
}

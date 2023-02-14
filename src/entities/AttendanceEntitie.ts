import {
  Column,
  CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn
} from 'typeorm';
  
import { Clinic } from './ClinicEntitie';
import { Patient } from './PatientEntitie';
import { Therapists } from './TherapistEntitie';

@Entity('attendance')
export class Attendance {
    @PrimaryGeneratedColumn('uuid')
      id: string;
  
    @Column()
      patient_id: string;

    @Column()
      therapist_id: string;

    @Column()
      clinic_id: string;

    @Column()
      date_of_service: string;

    @Column()
      observations?: string;

    @Column('simple-array', { nullable: false })
      procedures: string[];
  
    @ManyToOne(() => Clinic)
    @JoinColumn({ name: 'clinic_id' })
      clinic: Clinic;

    @ManyToOne(() => Patient)
    @JoinColumn({ name: 'patient_id' })
      patient: Patient;

    @ManyToOne(() => Therapists)
    @JoinColumn({ name: 'therapist_id' })
      therapists: Therapists;
  
    @CreateDateColumn()
      created_at: Date;
}
  
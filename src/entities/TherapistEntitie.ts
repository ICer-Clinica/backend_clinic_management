import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  BeforeInsert,
  BeforeUpdate,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import bcrypt from 'bcryptjs';
import { Clinic } from './ClinicEntitie';

export enum TherapistRole {
  OCCUPATIONAL_THERAPY = 'OCCUPATIONAL_THERAPY',
  PSYCHOLOGY = 'PSYCHOLOGY',
  PHYSIOTHERAPY = 'PHYSIOTHERAPY'
}
@Entity('therapists')
export class Therapists {
  @PrimaryGeneratedColumn('uuid')
    id: string;

  @Column()
    name: string;

  @Column()
    email: string;

  @Column()
    password: string;

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 8);
  }

  @Column()
    role: string;

  @Column({
    type: 'enum',
    enum: TherapistRole
  })
    office: TherapistRole;

  @Column()
    cns: string;

  @Column()
    clinic_id: string;

  @ManyToOne(() => Clinic)
  @JoinColumn({ name: 'clinic_id' })
    clinic: Clinic;

  @CreateDateColumn()
    created_at: Date;
}

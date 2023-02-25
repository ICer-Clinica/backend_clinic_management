import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  PrimaryColumn
} from 'typeorm';

import bcrypt from 'bcryptjs';
import { Clinic } from './ClinicEntitie';

export enum ProcedureArea {
  OCCUPATIONAL_THERAPY = 'OCCUPATIONAL_THERAPY',
  PSYCHOLOGY = 'PSYCHOLOGY',
  PHYSIOTHERAPY = 'PHYSIOTHERAPY',
  PHONOAUDIOLOGY = 'PHONOAUDIOLOGY'
}

@Entity('procedures')
export class Procedure {
  @PrimaryColumn()
    code: string;

  @Column()
    name: string;

  @Column({
    type: 'enum',
    enum: ProcedureArea
  })
    area: ProcedureArea;

  @Column()
    clinic_id: string;

  @ManyToOne(() => Clinic)
  @JoinColumn({ name: 'clinic_id' })
    clinic: Clinic;

  @CreateDateColumn()
    created_at: Date;
}

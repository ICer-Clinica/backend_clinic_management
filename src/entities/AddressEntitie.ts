import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('adresses')
export class Address {
  @PrimaryGeneratedColumn('uuid')
    id: string;

  @Column()
    street: string;

  @Column()
    number: number;

  @Column()
    district: string;

  @Column()
    zip: string;

  @Column()
    city: string;

  @Column()
    state: string;

  @CreateDateColumn()
    created_at: Date;
}

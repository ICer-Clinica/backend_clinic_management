import { MigrationInterface, QueryRunner, Table,TableForeignKey } from 'typeorm';

export class CreateAttendance1676333797186 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'attendance',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
            isGenerated: true,
          },
          {
            name: 'patient_id',
            type: 'varchar',
          },
          {
            name: 'therapist_id',
            type: 'varchar',
          },
          {
            name: 'clinic_id',
            type: 'varchar',
          },
          {
            name: 'procedures',
            type: 'varchar',
          },
          {
            name: 'date_of_service',
            type: 'varchar',
          },
          {
            name: 'observations',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      'attendance',
      new TableForeignKey({
        columnNames: ['clinic_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'clinics',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      })
    );

    await queryRunner.createForeignKey(
      'attendance',
      new TableForeignKey({
        columnNames: ['patient_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'patients',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      })
    );

    await queryRunner.createForeignKey(
      'attendance',
      new TableForeignKey({
        columnNames: ['therapist_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'therapists',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('therapists');
  }
}

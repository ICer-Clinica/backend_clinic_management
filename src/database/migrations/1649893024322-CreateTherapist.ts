import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreateTherapist1649893024322 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'therapists',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
            isGenerated: true,
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'email',
            type: 'varchar',
            isNullable: false,
            isUnique: true,
          },
          {
            name: 'password',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'role',
            type: 'varchar',
          },
          {
            name: 'office',
            type: 'varchar',
          },
          {
            name: 'cns',
            type: 'varchar',
          },
          {
            name: 'clinic_id',
            type: 'varchar',
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
      'therapists',
      new TableForeignKey({
        columnNames: ['clinic_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'clinics',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('therapists');
  }
}

import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateProcedures1650117359257 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'procedures',
        columns: [
          {
            name: 'code',
            type: 'varchar',
            isNullable: false,
            isPrimary: true,
            isUnique: true
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'area',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'clinic_id',
            type: 'varchar',
            isNullable: false,
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
      'procedures',
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
    await queryRunner.dropTable('procedures');
  }
}

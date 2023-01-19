import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreateFavorites1669862615465 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'favorites',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
            isGenerated: true,
          },
          {
            name: 'therapist_id',
            type: 'varchar',
          },
          {
            name: 'patient_id',
            type: 'varchar',
          },
        ],
      })
    );
    await queryRunner.createForeignKey(
      'favorites',
      new TableForeignKey({
        columnNames: ['therapist_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'therapists',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      })
    );
    await queryRunner.createForeignKey(
      'favorites',
      new TableForeignKey({
        columnNames: ['patient_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'patients',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('favorites');
  }
}

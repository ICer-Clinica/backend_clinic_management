import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddColumnsInClinics1680793484745 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'clinics',
      new TableColumn({
        name: 'clinicEmail',
        type: 'varchar',
        isNullable: true,
        isUnique: true,
      })
    );

    await queryRunner.addColumn(
      'clinics',
      new TableColumn({
        name: 'phone',
        type: 'varchar',
        isNullable: false,
      })
    );

    await queryRunner.addColumn(
      'clinics',
      new TableColumn({
        name: 'cnpj',
        type: 'varchar',
        isNullable: false,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('clinics', 'email');
    await queryRunner.dropColumn('clinics', 'phone');
    await queryRunner.dropColumn('clinics', 'cnpj');
  }
}

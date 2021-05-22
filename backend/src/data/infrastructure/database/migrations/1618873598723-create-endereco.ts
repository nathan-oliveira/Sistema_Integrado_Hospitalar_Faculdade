import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createEndereco1618873598723 implements MigrationInterface {
  private table = new Table({
    name: 'endereco',
    columns: [
      {
        name: 'id',
        type: 'int',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment',
      },
      {
        name: 'logradouro',
        type: 'varchar',
        length: '255',
        isNullable: false,
      },
      {
        name: 'numero',
        type: 'int',
        length: '18',
        isNullable: false,
      },
      {
        name: 'cidade',
        type: 'varchar',
        length: '255',
        isNullable: false,
      },
      {
        name: 'bairro',
        type: 'varchar',
        length: '255',
        isNullable: false,
      },
      {
        name: "estado",
        type: "varchar",
        length: "20",
        isNullable: false,
      },
      {
        name: 'cep',
        type: 'varchar',
        length: '14',
        isNullable: false,
      },
      {
        name: 'created_at',
        type: 'timestamp',
        default: 'now()',
      },
      {
        name: 'updated_at',
        type: 'timestamp',
        default: 'now()',
      },
    ],
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.table);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.table);
  }
}

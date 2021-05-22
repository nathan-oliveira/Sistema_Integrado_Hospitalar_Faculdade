import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createHistoricomedico1621037920924 implements MigrationInterface {

  private table = new Table({
    name: "historicomedico",
    columns: [
      {
        name: "id",
        type: "int",
        isPrimary: true,
        isGenerated: true,
        generationStrategy: "increment",
      },
      {
        name: "fraturamentos",
        type: "varchar",
        length: "255",
      },
      {
        name: "acidentes",
        type: "varchar",
        length: "255",
      },
      {
        name: "cirurgias",
        type: "varchar",
        length: "255",
      },
      {
        name: "doencas_cronicas",
        type: "varchar",
        length: "255",
      },
      {
        name: "id_usuario",
        type: "int",
        isNullable: false,
      },
      {
        name: "created_at",
        type: "timestamp",
        default: "now()",
      },
      {
        name: "updated_at",
        type: "timestamp",
        default: "now()",
      },
    ],
    foreignKeys: [
      {
        name: "usuario_medico_fk",
        referencedTableName: "usuario",
        referencedColumnNames: ["id"],
        columnNames: ["id_usuario"],
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      }
    ]
  })

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.table);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.table);
  }

}

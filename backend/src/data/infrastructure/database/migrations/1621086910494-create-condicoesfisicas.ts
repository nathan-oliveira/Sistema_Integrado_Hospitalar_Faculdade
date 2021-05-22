import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createCondicoesfisicas1621086910494 implements MigrationInterface {

  private table = new Table({
    name: "condicoesfisicas",
    columns: [
      {
        name: "id",
        type: "int",
        isPrimary: true,
        isGenerated: true,
        generationStrategy: "increment",
      },
      {
        name: "peso",
        type: "decimal"
      },
      {
        name: "altura",
        type: "decimal"
      },
      {
        name: "tipo_sanguineo",
        type: "varchar",
        length: "255",
      },
      {
        name: "uso_medicamentos",
        type: "varchar",
        length: "255",
      },
      {
        name: "consume_cigarro",
        type: "char",
      },
      {
        name: "consume_alcool",
        type: "char",
      },
      {
        name: "pratica_exercicios",
        type: "char",
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
        name: "usuario_condicoes_fk",
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
    await queryRunner.dropTable(this.table);
  }

}

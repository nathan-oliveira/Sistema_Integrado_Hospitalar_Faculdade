import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createHistoricovacina1621035693145 implements MigrationInterface {

  private table = new Table({
    name: "historicovacina",
    columns: [
      {
        name: "id",
        type: "int",
        isPrimary: true,
        isGenerated: true,
        generationStrategy: "increment",
      },
      {
        name: "covid",
        type: "char"
      },
      {
        name: "febreamarela",
        type: "char"
      },
      {
        name: "sarampo",
        type: "char"
      },
      {
        name: "caxumba",
        type: "char"
      },
      {
        name: "catapora",
        type: "char"
      },
      {
        name: "rubeula",
        type: "char"
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
        name: "usuario_vacina_fk",
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

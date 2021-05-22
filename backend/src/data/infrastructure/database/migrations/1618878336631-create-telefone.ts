import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createTelefone1618878336631 implements MigrationInterface {

  private table = new Table({
    name: "telefone",
    columns: [
      {
        name: "id",
        type: "int",
        isPrimary: true,
        isGenerated: true,
        generationStrategy: "increment",
      },
      {
        name: "descricao",
        type: "varchar",
        length: "20",
        isNullable: false,
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
        name: "usuario_telefone_fk",
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

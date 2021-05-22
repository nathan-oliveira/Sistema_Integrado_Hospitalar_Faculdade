import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createUsuario1618875554517 implements MigrationInterface {

  private table = new Table({
    name: "usuario",
    columns: [
      {
        name: "id",
        type: "int",
        isPrimary: true,
        isGenerated: true,
        generationStrategy: "increment"
      },
      {
        name: "email",
        type: "varchar",
        length: "255",
        isNullable: false,
        isUnique: true,
      },
      {
        name: "password",
        type: "varchar",
        length: "255",
        isNullable: false,
      },
      {
        name: "nome",
        type: "varchar",
        length: "255",
        isNullable: false,
      },
      {
        name: "cpf",
        type: "varchar",
        length: "15",
        isNullable: false,
      },
      {
        name: "rg",
        type: "varchar",
        length: "15",
        isNullable: false,
      },
      {
        name: "dataNasc",
        type: "timestamp",
        isNullable: false,
      },
      {
        name: "sexo",
        type: "varchar",
        length: "10"
      },
      {
        name: "id_endereco",
        type: "int",
        isNullable: false,
      },
      {
        name: "id_sus",
        type: "int",
        isNullable: false,
      },
      {
        name: "id_estadocivil",
        type: "int",
        isNullable: false,
      },
      {
        name: "id_nivel",
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
        name: "usuario_endereco_fk",
        referencedTableName: "endereco",
        referencedColumnNames: ["id"],
        columnNames: ["id_endereco"],
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      },
      {
        name: "sus_usuario_fk",
        referencedTableName: "sus",
        referencedColumnNames: ["id"],
        columnNames: ["id_sus"],
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      },
      {
        name: "estadocivil_usuario_fk",
        referencedTableName: "estadocivil",
        referencedColumnNames: ["id"],
        columnNames: ["id_estadocivil"],
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      },
      {
        name: "nivel_usuario_fk",
        referencedTableName: "nivel",
        referencedColumnNames: ["id"],
        columnNames: ["id_nivel"],
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

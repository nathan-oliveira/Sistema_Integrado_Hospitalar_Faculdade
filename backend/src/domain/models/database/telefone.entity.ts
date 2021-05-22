import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  Column
} from "typeorm";

import { Length } from "class-validator";

import UsuarioDAO from "./usuario.entity"

@Entity("telefone")
class TelefoneDAO extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  @Length(1, 20, { message: "Campo 'Descrição' não pode ser vazio!" })
  public descricao: string;

  @ManyToOne((type: any) => UsuarioDAO, (data: any) => data.id)
  @JoinColumn({ name: "id" })
  public id_usuario: UsuarioDAO;

  @CreateDateColumn()
  public created_at: Date;

  @UpdateDateColumn()
  public updated_at: Date;
}

export default TelefoneDAO;

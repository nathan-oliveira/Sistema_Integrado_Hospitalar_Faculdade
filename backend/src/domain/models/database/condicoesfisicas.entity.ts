import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  Column
} from "typeorm"

import UsuarioDAO from "./usuario.entity"

@Entity("condicoesfisicas")
class CondicoesFisicasDAO extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column("decimal", { precision: 5, scale: 2 })
  public peso: number;

  @Column("decimal", { precision: 5, scale: 2 })
  public altura: number;

  @Column()
  public tipo_sanguineo: string;

  @Column()
  public uso_medicamentos: string;

  @Column()
  public consume_cigarro: string;

  @Column()
  public consume_alcool: string;

  @Column()
  public pratica_exercicios: string;

  @ManyToOne((type: any) => UsuarioDAO, (data: any) => data.id)
  @JoinColumn({ name: "id" })
  public id_usuario: UsuarioDAO;

  @CreateDateColumn()
  public created_at: Date;

  @UpdateDateColumn()
  public updated_at: Date;
}

export default CondicoesFisicasDAO

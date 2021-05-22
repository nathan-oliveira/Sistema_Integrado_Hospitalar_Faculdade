import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column
} from "typeorm";

import { Length } from "class-validator";

@Entity("nivel")
class NivelDAO extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  @Length(1, 255, { message: "Campo 'Descrição' não pode ser vazio!" })
  public descricao: string;

  @CreateDateColumn()
  public created_at: Date;

  @UpdateDateColumn()
  public updated_at: Date;
}

export default NivelDAO;

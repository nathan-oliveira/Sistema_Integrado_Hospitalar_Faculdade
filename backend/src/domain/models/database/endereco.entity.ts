import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
} from 'typeorm';

import { Length } from 'class-validator';

@Entity('endereco')
class EnderecoDAO extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  @Length(1, 255, { message: "Campo 'Descrição' não pode ser vazio!" })
  public logradouro: string;

  @Column()
  @Length(1, 18, { message: "Campo 'Número' não pode ser vazio!" })
  public numero: number;

  @Column()
  @Length(1, 255, { message: "Campo 'Cidade' não pode ser vazio!" })
  public cidade: string;

  @Column()
  @Length(1, 255, { message: "Campo 'Bairro' não pode ser vazio!" })
  public bairro: string;

  @Column()
  @Length(2, 20, { message: "Campo 'Estado' deve conter no mínimo 2 á 20 caracteres!" })
  public estado: string;

  @Column()
  @Length(6, 14, { message: "Campo 'CEP' deve conter no mínimo 6 á 14 caracteres!" })
  public cep: number;

  @CreateDateColumn()
  public created_at: Date;

  @UpdateDateColumn()
  public updated_at: Date;
}

export default EnderecoDAO;

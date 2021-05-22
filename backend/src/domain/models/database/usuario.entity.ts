import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  Column
} from "typeorm";

import { Length } from "class-validator";

import EnderecoDAO from "./endereco.entity";
import SusDAO from "./sus.entity";
import EstadoCivilDAO from "./estadocivil.entity";
import NivelDAO from "./nivel.entity";
import TelefoneDAO from "./telefone.entity"
import CondicoesFisicasDAO from "./condicoesfisicas.entity"
import HistoricoVacinaDAO from "./historicovacina.entity"
import HistoricoMedicoDAO from "./historicomedico.entity"

@Entity("usuario")
class UsuarioDAO extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  @Length(6, 255, { message: "Campo 'E-mail' deve conter no mínimo 6 á 255 caracteres!" })
  public email: string;

  @Column()
  @Length(6, 255, { message: "Campo 'Senha' deve conter no mínimo 6 á 255 caracteres!" })
  public password: string;

  @Column()
  @Length(6, 255, { message: "Campo 'Nome' deve conter no mínimo 6 á 255 caracteres!" })
  public nome: string;

  @Column()
  @Length(6, 15, { message: "Campo 'CPF' deve conter no mínimo 6 á 255 caracteres!" })
  public cpf: string;

  @Column()
  @Length(6, 15, { message: "Campo 'RG' deve conter no mínimo 6 á 255 caracteres!" })
  public rg: string;

  @CreateDateColumn()
  public dataNasc: Date;

  @Column()
  @Length(6, 10, { message: "Campo 'RG' deve conter no mínimo 6 á 255 caracteres!" })
  public sexo: string;

  @OneToOne((type: any) => EnderecoDAO, (data: any) => data.id)
  @JoinColumn({ name: "id" })
  public id_endereco: EnderecoDAO;

  @OneToOne((type: any) => SusDAO, (data: any) => data.id)
  @JoinColumn({ name: "id" })
  public id_sus: SusDAO;

  @OneToOne((type: any) => EstadoCivilDAO, (data: any) => data.id)
  @JoinColumn({ name: "id" })
  public id_estadocivil: EstadoCivilDAO;

  @OneToOne((type: any) => NivelDAO, (data: any) => data.id)
  @JoinColumn({ name: "id" })
  public id_nivel: NivelDAO;

  @OneToOne((type: any) => TelefoneDAO, (data: any) => data.id_usuario)
  @JoinColumn({ name: "id" })
  public id_telefone: TelefoneDAO;

  @OneToOne((type: any) => CondicoesFisicasDAO, (data: any) => data.id_usuario)
  @JoinColumn({ name: "id" })
  public id_condicoesfisicas: CondicoesFisicasDAO;

  @OneToOne((type: any) => HistoricoVacinaDAO, (data: any) => data.id_usuario)
  @JoinColumn({ name: "id" })
  public id_historicovacina: HistoricoVacinaDAO;

  @OneToOne((type: any) => HistoricoMedicoDAO, (data: any) => data.id_usuario)
  @JoinColumn({ name: "id" })
  public id_historicomedico: HistoricoMedicoDAO;

  @CreateDateColumn()
  public created_at: Date;

  @UpdateDateColumn()
  public updated_at: Date;
}

export default UsuarioDAO;

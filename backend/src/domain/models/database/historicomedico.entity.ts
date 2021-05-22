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

@Entity("historicomedico")
class HistoricoMedicoDAO extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public fraturamentos: string;

  @Column()
  public acidentes: string;

  @Column()
  public cirurgias: string;

  @Column()
  public doencas_cronicas: string;

  @ManyToOne((type: any) => UsuarioDAO, (data: any) => data.id)
  @JoinColumn({ name: "id" })
  public id_usuario: UsuarioDAO;

  @CreateDateColumn()
  public created_at: Date;

  @UpdateDateColumn()
  public updated_at: Date;
}

export default HistoricoMedicoDAO

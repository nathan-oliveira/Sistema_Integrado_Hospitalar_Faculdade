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

@Entity("historicovacina")
class HistoricoVacinaDAO extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public covid: string;

  @Column()
  public febreamarela: string;

  @Column()
  public sarampo: string;

  @Column()
  public caxumba: string;

  @Column()
  public catapora: string;

  @Column()
  public rubeula: string;

  @ManyToOne((type: any) => UsuarioDAO, (data: any) => data.id)
  @JoinColumn({ name: "id" })
  public id_usuario: UsuarioDAO;

  @CreateDateColumn()
  public created_at: Date;

  @UpdateDateColumn()
  public updated_at: Date;
}

export default HistoricoVacinaDAO

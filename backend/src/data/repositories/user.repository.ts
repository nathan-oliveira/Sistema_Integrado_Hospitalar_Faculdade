import { EntityRepository, Repository } from "typeorm"
import { UsuarioDAO, HistoricoMedicoDAO, HistoricoVacinaDAO, CondicoesFisicasDAO } from "src/domain/models"

@EntityRepository(UsuarioDAO)
class UserRepository extends Repository<UsuarioDAO> {
  async getUserByCPF(cpf: string): Promise<UsuarioDAO[]> {
    return await this.manager.find(UsuarioDAO, { where: { cpf }, relations: ["id_nivel"] });
  }

  async getUserById(id: number): Promise<UsuarioDAO[]> {
    return await this.manager.find(UsuarioDAO, { where: { id }, relations: ["id_endereco", "id_sus", "id_estadocivil", "id_nivel", "id_telefone"] });
  }

  async getAll(): Promise<UsuarioDAO[]> {
    return await this.manager.find(UsuarioDAO);
  }

  async getAllUsers(id: number): Promise<UsuarioDAO[]> {
    return await this.manager.find(UsuarioDAO, { where: { id }, relations: ["id_endereco", "id_sus", "id_estadocivil", "id_nivel", "id_telefone", "id_condicoesfisicas", "id_historicovacina", "id_historicomedico"] });
  }

  async changePassword(id: number, password: string): Promise<object> {
    return await this.manager.update(UsuarioDAO, { id }, { password });
  }

  async getMedicalHistory(id: number): Promise<HistoricoMedicoDAO[]> {
    return await this.manager.find(HistoricoMedicoDAO, { where: { id_usuario: { id } } });
  }

  async getHistoricoVacina(id: number): Promise<HistoricoVacinaDAO[]> {
    return await this.manager.find(HistoricoVacinaDAO, { where: { id_usuario: { id } } });
  }

  async getCondicoesFisicas(id: number): Promise<CondicoesFisicasDAO[]> {
    return await this.manager.find(CondicoesFisicasDAO, { where: { id_usuario: { id } } });
  }

}

export default UserRepository;

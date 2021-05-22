import { Injectable } from "@nestjs/common"
import { getCustomRepository } from "typeorm"

import { UsuarioDAO, HistoricoMedicoDAO, HistoricoVacinaDAO, CondicoesFisicasDAO } from "src/domain/models"
import { UserRepository } from "src/data/repositories"

@Injectable()
export class UserService {
  async getUserByCPF(cpf: string): Promise<UsuarioDAO[]> {
    if (!cpf) throw new Error("O Campo 'CPF' não pode ser vazio!");
    return await getCustomRepository(UserRepository).getUserByCPF(cpf)
  }

  async getUserById(id: number): Promise<UsuarioDAO> {
    const user = await getCustomRepository(UserRepository).getUserById(id);

    if (user.length === 0) throw new Error("Usuário não encontrado.")
    delete user[0].password;

    return user[0];
  }

  async getAll(): Promise<UsuarioDAO[]> {
    const user = await getCustomRepository(UserRepository).getAll();

    if (user.length === 0) throw new Error("Usuário não encontrado.")
    user.map((u) => delete u.password)

    return user;
  }

  async getAllUsers(id: number): Promise<UsuarioDAO[]> {
    const user = await getCustomRepository(UserRepository).getAllUsers(id);

    if (user.length === 0) throw new Error("Usuário não encontrado.")
    user.map((u) => delete u.password)

    return user;
  }

  async getMedicalHistory(id: number): Promise<HistoricoMedicoDAO> {
    const history = await getCustomRepository(UserRepository).getMedicalHistory(id)
    return history[0];
  }

  async getHistoricoVacina(id: number): Promise<HistoricoVacinaDAO> {
    const history = await getCustomRepository(UserRepository).getHistoricoVacina(id)
    return history[0];
  }

  async getCondicoesFisicas(id: number): Promise<CondicoesFisicasDAO> {
    const history = await getCustomRepository(UserRepository).getCondicoesFisicas(id)
    return history[0];
  }

  async changePassword(id: number, password: string): Promise<object> {
    return await getCustomRepository(UserRepository).changePassword(id, password)
  }
}

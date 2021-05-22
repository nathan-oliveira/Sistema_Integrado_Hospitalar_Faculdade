import * as bcrypt from "bcrypt";
import { JwT } from "./jsonwebtoken";

export class BCrypt {
  static async createPasswordHash(password: string): Promise<string> {
    if (!password || password.length < 6) throw new Error("O campo 'Senha' não pode ser vazio e deve conter no mínimo 6 caracteres!");

    return await bcrypt.hash(password, 8);
  }

  static async comparePasswordHash(password: string, user: any): Promise<object> {
    if (!password) throw new Error("Favor preencha todos os campos!");
    if (!user) throw new Error("CPF e/ou senha inválidos!");

    const isValidPassword = await bcrypt.compare(password, user.password)
    if (!isValidPassword) throw new Error("CPF e/ou senha inválidos!");

    return JwT.createToken(user);
  }
}

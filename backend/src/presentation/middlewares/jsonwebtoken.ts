import * as jwt from "jsonwebtoken";

export class JwT {
  static async createToken(dataForm: any): Promise<object> {
    const { id, email, nome, id_nivel } = dataForm;

    const token = jwt.sign({ id }, process.env.APP_SECRET || "secret", {
      expiresIn: "1d"
    });

    return {
      token,
      email,
      nome,
      id_nivel: id_nivel.id
    };
  }
}

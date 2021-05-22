import { Controller, HttpStatus, Get, Post, Patch, Req, Res, UseGuards } from "@nestjs/common";
import { HttpRequest, HttpResponse } from "src/presentation/usecases";
import { UserService } from "src/domain/services/user.service"
import { BCrypt } from "src/presentation/middlewares/bcrypt"
import { RolesGuard } from "src/domain/roles/roles.guard"
import { IUser } from "src/presentation/usecases"

@Controller()
export class UserController implements IUser {
  constructor(private readonly userService: UserService) {}

  @Post("/login")
  async login(@Req() req: HttpRequest, @Res() res: HttpResponse): Promise<HttpResponse> {
    const { cpf, password } = req.body;

    try {
      const user = await this.userService.getUserByCPF(cpf)
      const result = await BCrypt.comparePasswordHash(password, user[0])

      return res.status(HttpStatus.OK).json(result);
    } catch (err) {
      return res.status(HttpStatus.FORBIDDEN).json({ error: err.message });
    }
  }

  @UseGuards(RolesGuard)
  @Get("/profile")
  async profile(@Req() req: HttpRequest, @Res() res: HttpResponse): Promise<HttpResponse> {
    try {
      const { userId } = (req as unknown) as { userId: number };
      const result = await this.userService.getUserById(userId)

      return res.status(HttpStatus.OK).json(result);
    } catch (err) {
      return res.status(HttpStatus.FORBIDDEN).json({ error: err.message });
    }
  }

  @UseGuards(RolesGuard)
  @Patch("/password")
  async changePassword(@Req() req: HttpRequest, @Res() res: HttpResponse): Promise<HttpResponse> {
    try {
      const { userId } = (req as unknown) as { userId: number };
      const passwordHash = await BCrypt.createPasswordHash(req.body.password);

      const result = await this.userService.changePassword(userId, passwordHash)
      return res.status(HttpStatus.OK).json(result);
    } catch (err) {
      return res.status(HttpStatus.FORBIDDEN).json({ error: err.message });
    }
  }

  @UseGuards(RolesGuard)
  @Post("/validateToken")
  async validateToken(@Req() req: HttpRequest, @Res() res: HttpResponse): Promise<HttpResponse> {
    try {
      const { userId } = (req as unknown) as { userId: number };
      const result = await this.userService.getUserById(userId)
      const dataForm = {
        nome: result.nome,
        email: result.email,
        id_nivel: result.id_nivel.id
      }

      return res.status(HttpStatus.OK).json(dataForm);
    } catch (err) {
      return res.status(HttpStatus.FORBIDDEN).json({ error: err.message });
    }
  }

  @UseGuards(RolesGuard)
  @Get("/historicomedico")
  async medicalHistory(@Req() req: HttpRequest, @Res() res: HttpResponse): Promise<HttpResponse> {
    try {
      const { userId } = (req as unknown) as { userId: number };
      const result = await this.userService.getMedicalHistory(userId)

      return res.status(HttpStatus.OK).json(result);
    } catch (err) {
      return res.status(HttpStatus.FORBIDDEN).json({ error: err.message });
    }
  }

  @UseGuards(RolesGuard)
  @Get("/historicovacina")
  async historicoVacina(@Req() req: HttpRequest, @Res() res: HttpResponse): Promise<HttpResponse> {
    try {
      const { userId } = (req as unknown) as { userId: number };
      const result = await this.userService.getHistoricoVacina(userId)

      return res.status(HttpStatus.OK).json(result);
    } catch (err) {
      return res.status(HttpStatus.FORBIDDEN).json({ error: err.message });
    }
  }

  @UseGuards(RolesGuard)
  @Get("/condicoesfisicas")
  async condicoesFisicas(@Req() req: HttpRequest, @Res() res: HttpResponse): Promise<HttpResponse> {
    try {
      const { userId } = (req as unknown) as { userId: number };
      const result = await this.userService.getCondicoesFisicas(userId)

      return res.status(HttpStatus.OK).json(result);
    } catch (err) {
      return res.status(HttpStatus.FORBIDDEN).json({ error: err.message });
    }
  }

  @UseGuards(RolesGuard)
  @Get("/users")
  async users(@Req() req: HttpRequest, @Res() res: HttpResponse): Promise<HttpResponse> {
    try {
      const result = await this.userService.getAll()
      return res.status(HttpStatus.OK).json(result)
    } catch (err) {
      return res.status(HttpStatus.FORBIDDEN).json({ error: err.message });
    }
  }

  @UseGuards(RolesGuard)
  @Get("/usersAll/:id")
  async usersAll(@Req() req: HttpRequest, @Res() res: HttpResponse): Promise<HttpResponse> {
    try {
      const { id } = (req.params as unknown) as { id: number };
      const result = await this.userService.getAllUsers(id)

      return res.status(HttpStatus.OK).json(result)
    } catch (err) {
      return res.status(HttpStatus.FORBIDDEN).json({ error: err.message });
    }
  }
}

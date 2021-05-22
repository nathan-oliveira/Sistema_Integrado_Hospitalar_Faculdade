import { Controller, Get, Req, Res, HttpStatus } from "@nestjs/common";
import { AppService } from "src/domain/services/app.service";
import { HttpRequest, HttpResponse, IApp } from "src/presentation/usecases";

@Controller()
export class AppController implements IApp {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getVersion(@Req() req: HttpRequest, @Res() res: HttpResponse): Promise<HttpResponse> {
    const dataForm = await this.appService.getVersion();
    return res.status(HttpStatus.OK).json(dataForm);
  }
}

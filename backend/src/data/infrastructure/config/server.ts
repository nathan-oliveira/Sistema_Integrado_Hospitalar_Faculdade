import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import * as bp from "body-parser";
import * as compression from "compression";
import { AppModule } from "src/domain/repo/app.module";

class Server {
  public app: NestExpressApplication;

  public async createServer(): Promise<void> {
    this.app = await NestFactory.create<NestExpressApplication>(AppModule);
    this.app.enableCors();
    this.app.use(bp.json({ limit: "20mb" }));
    this.app.use(bp.urlencoded({ extended: true }));
    this.app.use(compression());
    this.app.disable("x-powered-by");
    await this.app.listen(process.env.PORT || 3333)
  }
}

export default new Server();

import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  async getVersion(): Promise<object> {
    return { version: "1.0.0" };
  }
}

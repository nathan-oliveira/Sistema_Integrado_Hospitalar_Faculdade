import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import * as jwt from "jsonwebtoken";
import { IJwTPayload } from "src/commom/usecases";
import { Observable } from "rxjs";

@Injectable()
export class RolesGuard implements CanActivate {
  canActivate(context: ExecutionContext): any | Promise<any> | Observable<any> {
    const headers = context.getArgs()[0].headers;

    const payload = this.checkAccess(headers.authorization)
    if (payload === false) return false;

    (<any>context.getArgs()[0]).userId = payload;
    return true;
  }

  checkAccess(authHeader: string) {
    try {
      if (!authHeader) return false;
      const [, token] = authHeader.split(" ");

      const payload = (jwt.verify(token, process.env.APP_SECRET || "secret")) as IJwTPayload;
      if (payload.id) return payload.id;

      return false;
    } catch (err) {
      return false;
    }
  }
}

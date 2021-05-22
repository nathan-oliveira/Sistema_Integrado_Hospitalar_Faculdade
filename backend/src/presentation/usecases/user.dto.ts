import { HttpRequest, HttpResponse } from "./express.dto";

export interface IUser {
  login(req: HttpRequest, res: HttpResponse): Promise<HttpResponse>;
}

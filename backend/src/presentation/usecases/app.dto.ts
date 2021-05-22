import { HttpRequest, HttpResponse } from "./express.dto";

export interface IApp {
  getVersion(req: HttpRequest, res: HttpResponse): Promise<HttpResponse>;
}

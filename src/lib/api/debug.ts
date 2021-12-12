import { BaseApi } from "./base_api";

export interface PostEchoResponse {
  value: string;
}

class DebugApiClass extends BaseApi {
  public debugEcho(value: string) {
    return this.post<PostEchoResponse>('/echo', { value });
  }

  protected pathName() {
    return '/v1/debug';
  }
}

export const DebugApi = new DebugApiClass();

import { ApiClient } from "../rest-client/api-client";

export abstract class BaseApi extends ApiClient {
  protected basePath() {
    // TODO: 環境による出し分け
    return "/api";
  }
  protected abstract pathName(): string;
}

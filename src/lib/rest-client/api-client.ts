import axios, { AxiosError } from "axios";

export enum HTTP_METHOD {
  GET = 'GET', POST = 'POST', PUT = 'PUT', DELETE = 'DELETE', PATCH = 'PATCH'
}

export abstract class ApiClient {
  protected get<T>(url = '', param = {}) {
    return this.request<T>(url, HTTP_METHOD.GET, param);
  }
  protected post<T>(url = '', param = {}) {
    return this.request<T>(url, HTTP_METHOD.POST, param);
  }
  protected put<T>(url = '', param = {}) {
    return this.request<T>(url, HTTP_METHOD.PUT, param);
  }
  protected delete<T>(url = '', param = {}) {
    return this.request<T>(url, HTTP_METHOD.DELETE, param);
  }
  protected patch<T>(url = '', param = {}) {
    return this.request<T>(url, HTTP_METHOD.PATCH, param);
  }

  protected abstract basePath(): string;
  protected abstract pathName(): string;

  private async request<T>(url: string, method: HTTP_METHOD, data: any) {
    const config = {
      url: `${this.basePath()}${this.pathName()}${url}`,
      method,
      param: null,
      data: null,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
    };
    if (method === 'GET') {
      config.param = data;
    } else {
      config.data = data;
    }
    const req = axios.request<T>(config);
    req.then(res => res, (e: AxiosError) => {
      this.onError(e);
      return e;
    });

    return req;
  }

  private onError(e: AxiosError) {
    // TODO: エラー内容の表示などを書く
    console.log(e);
  }
}

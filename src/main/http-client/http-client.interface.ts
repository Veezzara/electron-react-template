export type HttpHeaders = {
  [key: string]: string;
};

export type RequestConfig = {
  headers: HttpHeaders;
};

export enum HttpMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

export interface IHttpClient {
  request<TRequest, TResponse>(
    method: HttpMethod,
    url: string,
    data?: TRequest,
    config?: RequestConfig,
  ): Promise<TResponse>;
}

export const API_CLIENT_TYPE = "ApiClient";

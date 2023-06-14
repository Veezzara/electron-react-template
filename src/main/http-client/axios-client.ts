import axios, { AxiosInstance, AxiosRequestConfig, AxiosError } from "axios";
import { HttpMethod, IHttpClient, RequestConfig } from "./http-client.interface";

export class AxiosClient implements IHttpClient {
  private client: AxiosInstance;

  constructor(baseURL: string) {
    this.client = axios.create();
    this.client.defaults.baseURL = baseURL;
  }

  async request<TRequest, TResponse>(
    method: HttpMethod,
    url: string,
    data?: TRequest,
    config?: RequestConfig,
  ): Promise<TResponse> {
    const requestConfig: AxiosRequestConfig = {
      method,
      url,
      data,
      headers: config?.headers,
    };

    let response;

    try {
      response = await this.client.request(requestConfig);
    } catch (err) {
      const error = err as AxiosError;
      throw error.response?.data;
    }

    return response.data;
  }
}

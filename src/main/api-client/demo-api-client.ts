import { AxiosClient } from "../http-client/axios-client";
import { HttpMethod, IHttpClient } from "../http-client/http-client.interface";

export class DemoApiClient {
  private httpClient: IHttpClient;

  constructor() {
    this.httpClient = new AxiosClient("https://jsonplaceholder.typicode.com");
  }

  getPosts = async () => {
    return this.httpClient.request<undefined, any>(
      HttpMethod.GET,
      "posts",
    );
  };
}

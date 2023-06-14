import { AxiosClient } from "../http-client/axios-client";
import { HttpMethod, IHttpClient } from "../http-client/http-client.interface";
import fs from "fs";
import os from "os";
import path from "path";

export class DemoApiClient {
  private httpClient: IHttpClient;

  constructor() {
    this.httpClient = new AxiosClient("https://jsonplaceholder.typicode.com");
  }

  getPosts = async () => {
    const response = await this.httpClient.request<undefined, any>(
      HttpMethod.GET,
      "posts",
    );

    fs.writeFile(path.join(os.homedir(), "posts.txt"), JSON.stringify(response), (err) => {
      if (err) {
        console.error(err);
      }
    });

    return response;
  };
}

import { DemoApiClient } from "../api-client/demo-api-client";

const clientInstance = new DemoApiClient();

const ApiClientExposes = {
  client: () => clientInstance,
};

export default ApiClientExposes;
export type apiClientExposeType = typeof ApiClientExposes;

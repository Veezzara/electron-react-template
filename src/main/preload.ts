import { contextBridge } from "electron";
import versionsExposes from "./exposes/versions";
import credentialsExposes from "./exposes/credentials-expose";
import ApiClientExposes from "./exposes/api-client-expose";

contextBridge.exposeInMainWorld("versions", versionsExposes);
contextBridge.exposeInMainWorld("credentialsService", credentialsExposes);
contextBridge.exposeInMainWorld("apiClient", ApiClientExposes);


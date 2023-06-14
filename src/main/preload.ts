import { contextBridge } from "electron";
import versionsExposes from "./exposes/versions";
import credentialsExposes from "./exposes/credentials-expose";

contextBridge.exposeInMainWorld("versions", versionsExposes);
contextBridge.exposeInMainWorld("credentialsService", credentialsExposes);


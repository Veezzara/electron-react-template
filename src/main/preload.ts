import { contextBridge } from "electron";
import versionsExposes from "./exposes/versions";

contextBridge.exposeInMainWorld("versions", versionsExposes);

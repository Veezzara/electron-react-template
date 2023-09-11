import { contextBridge } from "electron";
import exposes from "./exposes";

contextBridge.exposeInMainWorld("bridge", exposes);

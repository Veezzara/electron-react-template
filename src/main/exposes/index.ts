import ipcExposes from "./ipc-exposes";
import versionsExposes from "./versions";

const exposes = {
  versionsExposes,
  ipcExposes,
};

export type ExposesType = typeof exposes;
export default exposes;

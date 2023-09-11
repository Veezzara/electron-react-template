import { ipcRenderer } from "electron";
import Optional from "../../common/types/optional";
import handlers from "../ipc-handlers/handlers";

type Channels = keyof typeof handlers;
type Handler<T extends Channels> = (typeof handlers)[T];

export type IpcExposesType = {
  [P in Channels]: Handler<P>;
};

type Entries<T> = { [P in keyof T]: [P, T[P]] }[keyof T][];
type HandlerEntries = Entries<IpcExposesType>;

type IpcExposesTypeOptional = Optional<IpcExposesType>;

const ipcExposes: IpcExposesTypeOptional = {};

const handlerEntries = Object.entries(handlers) as HandlerEntries;

for (let i = 0; i < handlerEntries.length; i++) {
  const [channel] = handlerEntries[i];

  ipcExposes[channel] = (...args: unknown[]) =>
    ipcRenderer.invoke(channel, ...args);
}

export default ipcExposes as IpcExposesType;

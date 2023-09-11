import { ipcMain, IpcMainInvokeEvent } from "electron";
import handlers from "./handlers";

const setupIpcHandlers = () => {
  const handlerEntries = Object.entries(handlers);

  for (let i = 0; i < handlerEntries.length; ++i) {
    const [channel, handler] = handlerEntries[i];

    ipcMain.handle(channel, (event: IpcMainInvokeEvent, ...args: unknown[]) =>
      // иногда я ненавижу тайпскрипт.
      // @ts-ignore
      handler(...args),
    );
  }
};

export default setupIpcHandlers;

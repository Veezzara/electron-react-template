import path from "path";
import { BrowserWindow, app } from "electron";
import resolveHtmlPath from "./utils/resolve-html-path";
import EnvOption from "../../utils/env-options";
import projectPaths from "../../config/project-paths";
import setupIpcHandlers from "./ipc-handlers/setup-handlers";

const createWindow = async () => {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      preload:
        process.env.NODE_ENV === EnvOption.Production
          ? path.join(__dirname, "preload.js")
          : path.join(projectPaths.preload, "preload.js"),
      devTools: process.env.NODE_ENV === EnvOption.Development,
    },
  });

  await mainWindow.loadURL(resolveHtmlPath("index.html"));
  mainWindow.setMenu(null);

  if (process.env.NODE_ENV === EnvOption.Production) return;
  mainWindow.webContents.openDevTools({ mode: "detach" });
};

app.whenReady().then(() => {
  setupIpcHandlers();
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

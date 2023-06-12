import { Configuration } from "webpack";
import EnvOption from "../utils/env-options";
import path from "path";
import projectPaths from "./project-paths";

if (!process.env.NODE_ENV) throw new Error("Environment is not defined.");

const environment = EnvOption[process.env.NODE_ENV as keyof typeof EnvOption];

const mainProcessConfig: Configuration = {
  mode: environment,
  target: "electron-main",
  entry: {
    main: path.resolve(projectPaths.main, "main.ts"),
    preload: path.resolve(projectPaths.main, "preload.ts"),
  },
  output: {
    path: path.resolve(projectPaths.dist, "main"),
    filename: "[name].js",
  },
  resolve: {
    extensions: [".js", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
    ],
  },
};

export default mainProcessConfig;

import path from "path";
import { Configuration } from "webpack";
import EnvOption from "../utils/env-options";
import projectPaths from "./project-paths";
import nullishThrow from "../utils/nullish-throw";
import getEnvironment from "../utils/get-environment";

const environment: EnvOption = nullishThrow(getEnvironment());

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

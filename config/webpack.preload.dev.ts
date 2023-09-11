import path from "path";
import { Configuration } from "webpack";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import EnvOption from "../utils/env-options";
import projectPaths from "./project-paths";
import getEnvironment from "../utils/get-environment";
import nullishThrow from "../utils/nullish-throw";

const environment: EnvOption = nullishThrow(getEnvironment());

const preloadDevConfig: Configuration = {
  mode: environment,
  target: "electron-preload",
  entry: path.resolve(projectPaths.main, "preload.ts"),
  output: {
    path: projectPaths.preload,
    filename: "preload.js",
  },
  plugins: [new CleanWebpackPlugin()],
  resolve: {
    extensions: ["", ".js", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
      {
        test: /\.node$/,
        loader: "node-loader",
      },
    ],
  },
  watch: true,
};

export default preloadDevConfig;

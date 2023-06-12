import { Configuration } from "webpack";
import EnvOption from "../utils/env-options";
import projectPaths from "./project-paths";
import path from "path";
import { CleanWebpackPlugin } from "clean-webpack-plugin";

// TODO make util function to get environment;

if (!process.env.NODE_ENV) throw new Error("Environment is not defined.");

const environment = EnvOption[process.env.NODE_ENV as keyof typeof EnvOption];

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

export default preloadDevConfig;

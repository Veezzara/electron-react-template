import path from "path";
import { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import { merge } from "webpack-merge";
import EnvOption from "../utils/env-options";
import projectPaths from "./project-paths";
import devRendererConfig from "./webpack.renderer.dev";
import prodRendererConfig from "./webpack.renderer.prod";
import getEnvironment from "../utils/get-environment";
import nullishThrow from "../utils/nullish-throw";

const environment = nullishThrow(getEnvironment());

const baseRendererConfig: Configuration = {
  mode: environment,
  entry: path.resolve(projectPaths.renderer, "index.tsx"),
  output: {
    path: path.resolve(projectPaths.dist, "renderer"),
    filename: "[name].bundle.[hash].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(projectPaths.renderer, "index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "[name].bundle.[hash].css",
    }),
    new CleanWebpackPlugin(),
  ],
  resolve: {
    extensions: ["", ".js", ".jsx", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: "[local]_[hash]",
              },
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: ["postcss-preset-env"],
              },
            },
          },
        ],
        include: /\.module\.css$/,
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: ["postcss-preset-env"],
              },
            },
          },
        ],
        exclude: /\.module\.css$/,
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
    ],
  },
};

const environmentConfig =
  environment === EnvOption.Development
    ? devRendererConfig
    : prodRendererConfig;

export default merge(baseRendererConfig, environmentConfig);

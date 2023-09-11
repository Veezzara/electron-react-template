import { Configuration } from "webpack";
import ESLintWebpackPlugin from "eslint-webpack-plugin";

const prodRendererConfig: Configuration = {
  plugins: [new ESLintWebpackPlugin()],
};

export default prodRendererConfig;

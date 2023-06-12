import { Configuration } from "webpack";
import "webpack-dev-server";

const devRendererConfig: Configuration = {
  devServer: {
    historyApiFallback: true,
  },
};

export default devRendererConfig;

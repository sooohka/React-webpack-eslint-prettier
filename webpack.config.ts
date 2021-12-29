import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import { Configuration as WebpackConfig } from "webpack";
import { Configuration as DevServerConfig } from "webpack-dev-server";
import DotEnv from "dotenv-webpack";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";

interface Configuration extends WebpackConfig {
  // devServer?: DevServerConfig;
}

const isDev = process.env.NODE_ENV !== "production";
const config: Configuration = {
  mode: isDev ? "development" : "production",
  devServer: {
    port: 3000,
    hot: true,
  },
  entry: "./src/Index.tsx",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg)$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
    new DotEnv({
      path: isDev ? "./.env.dev" : "./.env.prod",
    }),
    isDev && new ReactRefreshWebpackPlugin(),
    new ForkTsCheckerWebpackPlugin({
      async: false,
      // eslint: {
      //   files: "./src/**/*.{ts,tsx,js,jsx}",
      // },
    }),
  ].filter(Boolean),
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      "@Components": path.join(__dirname, "./src/components/"),
    },
  },
};

export default config;

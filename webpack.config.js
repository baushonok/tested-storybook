const path = require("path");

const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const StorytestsWebpackPlugin = require("storytests-webpack-plugin");
const {
  componentNamePattern,
  storyFilesPath,
  testFilePostfixes,
  storyNamePattern,
  testDirectoryPath,
} = require("./src/constants");
const testTemplate = require("./src/testTemplate");

module.exports = {
  entry: "./src/index.tsx",
  context: __dirname,
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          transpileOnly: true,
        },
      },
      {
        test: /\.css$/i,
        loader: "css-loader",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new StorytestsWebpackPlugin({
      storyFilesPath,
      componentNamePattern,
      storyNamePattern,
      testDirectoryPath,
      testFilePostfixes,
      testTemplate,
    }),
  ],
};

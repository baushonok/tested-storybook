const path = require("path");

const CreateTestsPlugin = require("./plugins/CreateTestsPlugin/createTestsPlugin");
const {
  componentNamePattern,
  storyFilesPath,
  storyNamePattern,
  testDirectoryPath
} = require("./src/constants");
const testTemplate = require("./src/testTemplate");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new CreateTestsPlugin({
      storyFilesPath,
      componentNamePattern,
      storyNamePattern,
      testDirectoryPath,
      testTemplate
    })
  ]
};

const path = require("path");

const componentNamePattern = /[a-z]+(?=", module)/gi;
const storyNamePattern = /[a-z ]+(?=", \(\) => )/gi;

const storyFilesPath = path.resolve(
  __dirname,
  "components/**/__stories__/*.stories.tsx"
);

const testDirectoryPath = "../../tests";

const testFilePostfixes = ['hermione'];

module.exports = {
  componentNamePattern,
  storyFilesPath,
  storyNamePattern,
  testDirectoryPath,
  testFilePostfixes
};

const fs = require("fs");
const path = require("path");

const getComponentName = (fileContent, pattern) =>
  fileContent.match(pattern)[0];

const getComponentStoriesNames = (fileContent, pattern) =>
  fileContent.match(pattern);

const generateHermioneTest = (
  testDirectoryPath,
  componentName,
  componentStoryName,
  testTemplate
) => {
  const testPath = path.resolve(
    testDirectoryPath,
    `${componentStoryName}.hermione.js`
  );

  if (!fs.existsSync(testPath)) {
    fs.createWriteStream(testPath, "utf8");
    fs.writeFileSync(
      testPath,
      testTemplate(componentName, componentStoryName),
      "utf8"
    );
  }
};

module.exports = {
  getComponentName,
  getComponentStoriesNames,
  generateHermioneTest
};

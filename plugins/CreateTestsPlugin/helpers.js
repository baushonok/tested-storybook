const fs = require("fs");
const path = require("path");

const testTemplate = require("./testTemplate");

const getTestsDirectoryPath = filePath =>
  path.resolve(filePath, "../../", "tests");

const getComponentName = fileContent =>
  fileContent.match(/[a-z]+(?=",module)/gi)[0];

const getComponentStoriesNames = fileContent =>
  fileContent.match(/[a-z]+(?=",\(\)=>)/gi);

const generateHermioneTest = (
  testDirectoryPath,
  componentName,
  componentStoryName
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
  generateHermioneTest,
  getTestsDirectoryPath
};

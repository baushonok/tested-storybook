const fs = require("fs");
var glob = require("glob");

const { directoriesPattern } = require("./constants");
const {
  getComponentName,
  getComponentStoriesNames,
  generateHermioneTest,
  getTestsDirectoryPath
} = require("./helpers");

const pluginName = "CreateTestsPlugin";

class CreateTestsPlugin {
  apply(compiler) {
    compiler.hooks.run.tap(pluginName, compilation => {
      glob(directoriesPattern, (err, matches) => {
        if (err) {
          throw err;
        }

        matches.forEach(filePath => {
          if (!fs.existsSync(filePath)) {
            throw new Error(`File ${filePath} does not exist`);
          }

          const fileData = fs.readFileSync(filePath, "utf8");
          const dataWithoutSpaces = fileData.replace(/\s/g, "");
          const componentName = getComponentName(dataWithoutSpaces);
          const componentStories = getComponentStoriesNames(dataWithoutSpaces);
          const testsPath = getTestsDirectoryPath(filePath);

          if (!fs.existsSync(testsPath)) {
            fs.mkdirSync(testsPath);
          }

          componentStories.forEach(story => generateHermioneTest(testsPath, componentName, story));
        });
      });
    });
  }
}

module.exports = CreateTestsPlugin;

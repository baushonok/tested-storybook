const fs = require("fs");
var glob = require("glob");

const {
  getComponentName,
  getComponentStoriesNames,
  generateHermioneTest
} = require("./helpers");

const pluginName = "CreateTestsPlugin";

class CreateTestsPlugin {
  constructor(options) {
    this.options = options;
  }

  apply(compiler) {
    compiler.hooks.run.tap(pluginName, compilation => {
      const {
        componentNamePattern,
        storyFilesPath,
        storyNamePattern,
        testDirectoryPath,
        testTemplate
      } = this.options;

      glob(storyFilesPath, (err, matches) => {
        if (err) {
          throw err;
        }

        matches.forEach(filePath => {
          if (!fs.existsSync(filePath)) {
            throw new Error(`File ${filePath} does not exist`);
          }

          const fileData = fs.readFileSync(filePath, "utf8");
          const dataWithoutSpaces = fileData.replace(/\s/g, "");
          const componentName = getComponentName(
            dataWithoutSpaces,
            componentNamePattern
          );
          const componentStories = getComponentStoriesNames(
            dataWithoutSpaces,
            storyNamePattern
          );

          if (!fs.existsSync(testDirectoryPath)) {
            fs.mkdirSync(testDirectoryPath);
          }

          componentStories.forEach(story =>
            generateHermioneTest(
              testDirectoryPath,
              componentName,
              story,
              testTemplate
            )
          );
        });
      });
    });
  }
}

module.exports = CreateTestsPlugin;

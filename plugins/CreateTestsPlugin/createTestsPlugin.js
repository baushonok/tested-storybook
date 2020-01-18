const fs = require("fs");
const path = require("path");

const testTemplate = require("./testTemplate");

const pluginName = "CreateTestsPlugin";

class CreateTestsPlugin {
  apply(compiler) {
    compiler.hooks.run.tap(pluginName, compilation => {
      const filePath = path.resolve(
        __dirname,
        "../../",
        "src/components/accordion/__stories__/accordion.stories.tsx"
      );

      console.log(filePath);

      fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
          throw err;
        }

        const dataWithoutSpaces = data.replace(/\s/g, "");
        console.log(dataWithoutSpaces);

        const componentName = dataWithoutSpaces.match(
          /[a-z]+(?=",module)/gi
        )[0];
        console.log(componentName);

        const componentStories = dataWithoutSpaces.match(
          /[a-z]+(?=",\(\)=>)/gi
        );
        console.log(componentStories);

        const testsPath = path.resolve(filePath, "../../", "tests");

        if (!fs.existsSync(testsPath)) {
          fs.mkdirSync(testsPath);
        }

        componentStories.forEach(story => {
          const testPath = path.resolve(testsPath, `${story}.hermione.js`);

          if (!fs.existsSync(testPath)) {
            console.log(testPath);

            fs.createWriteStream(testPath, "utf8");
            fs.writeFileSync(
              testPath,
              testTemplate(componentName, story),
              "utf8"
            );
          }
        });
      });
    });
  }
}

module.exports = CreateTestsPlugin;

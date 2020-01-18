const pluginName = 'CreateTestsPlugin';

class CreateTestsPlugin {
  apply(compiler) {
    compiler.hooks.run.tap(pluginName, compilation => {
      console.log('The webpack build process is starting!!!');
    });
  }
}

module.exports = CreateTestsPlugin;
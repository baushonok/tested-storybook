const path = require("path");

const directoriesPattern = path.resolve(
  __dirname,
  "../../",
  "src/components/**/__stories__/*.stories.tsx"
);

module.exports = { directoriesPattern };

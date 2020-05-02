module.exports = {
  baseUrl: "http://localhost:12345/",

  sets: {
    desktop: {
      files: "**/tests/hermione/*.hermione.js"
    }
  },

  browsers: {
    chrome: {
      desiredCapabilities: {
        browserName: "chrome"
      }
    }
  },

  plugins: {
    "html-reporter/hermione": {
      enabled: true,
      path: "hermione/reports",
      defaultView: "all",
      baseHost: "test.com",
      errorPatterns: [
        "Parameter .* must be a string",
        {
          name: "Cannot read property of undefined",
          pattern: "Cannot read property .* of undefined"
        }
      ]
    }
  }
};

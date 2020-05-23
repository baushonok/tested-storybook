module.exports = {
  baseUrl: "http://localhost:12345/",

  sets: {
    app: {
      files: "src/__tests__/hermione/*.hermione.js",
    },
    storybook: {
      files: "src/components/**/__tests__/hermione/*.hermione.js",
    },
  },

  browsers: {
    chrome: {
      desiredCapabilities: {
        browserName: "chrome",
      },
      windowSize: {
        width: 1200,
        height: 1000,
      },
    },
    chromeMobile: {
      desiredCapabilities: {
        browserName: "chrome",
        chromeOptions: {
          args: ["--headless"],
        },
      },
      windowSize: {
        width: 414,
        height: 800,
      },
    },
    safariXL: {
      desiredCapabilities: {
        browserName: "safari",
      },
      windowSize: "1300x900",
    },
    safariMobile: {
      desiredCapabilities: {
        browserName: "safari",
      },
      windowSize: {
        width: 414,
        height: 700,
      },
    },
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
          pattern: "Cannot read property .* of undefined",
        },
      ],
    },
  },
};

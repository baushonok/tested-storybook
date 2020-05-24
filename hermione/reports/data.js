var data = {
  skips: [],
  suites: [
    {
      name: 'App',
      suitePath: ['App'],
      children: [
        {
          name: 'Default',
          suitePath: ['App', 'Default'],
          browsers: [
            {
              name: 'chrome',
              result: {
                suiteUrl: '/',
                name: 'chrome',
                metaInfo: {
                  url: '/',
                  file: 'src/__tests__/hermione/App.hermione.js',
                  sessionId: '5e9d87b862564382b8625cc093213231',
                },
                imagesInfo: [
                  {
                    status: 'updated',
                    actualImg: {
                      path: 'images/adf56b4/Default/chrome~current_0.png',
                      size: { width: 2368, height: 1642 },
                    },
                    stateName: 'Default',
                    expectedImg: {
                      path: 'images/adf56b4/Default/chrome~ref_0.png',
                      size: { width: 2368, height: 1642 },
                    },
                  },
                ],
                screenshot: false,
                multipleTabs: true,
                status: 'success',
                attempt: 0,
              },
              retries: [],
            },
            {
              name: 'chromeMobile',
              result: {
                suiteUrl: '/',
                name: 'chromeMobile',
                metaInfo: {
                  pid: 56795,
                  url: '/',
                  file: 'src/__tests__/hermione/App.hermione.js',
                  sessionId: '0a33f2a19b13bded668dd265e44be200',
                },
                imagesInfo: [
                  {
                    stateName: 'Default',
                    refImg: {
                      path:
                        '/Users/olgapasynok/Documents/code/tested-storybook/hermione/screens/adf56b4/chromeMobile/Default.png',
                      size: { width: 796, height: 1600 },
                    },
                    status: 'success',
                    expectedImg: {
                      path: 'images/adf56b4/Default/chromeMobile~ref_0.png',
                      size: { width: 796, height: 1600 },
                    },
                  },
                ],
                screenshot: false,
                multipleTabs: true,
                status: 'success',
                attempt: 0,
              },
              retries: [],
            },
            {
              name: 'safariXL',
              result: {
                suiteUrl: '',
                name: 'safariXL',
                metaInfo: {
                  url: '',
                  file: 'src/__tests__/hermione/App.hermione.js',
                  sessionId: 'unknown session id',
                },
                imagesInfo: [],
                screenshot: false,
                multipleTabs: true,
                status: 'error',
                error: {
                  message:
                    "Could not create a session: The Safari instance terminated while trying to pair with it.\nBuild info: version: '3.141.5', revision: 'd54ebd709a', time: '2018-11-06T11:58:47'\nSystem info: host: 'MacBook-Pro-Olga.local', ip: 'fe80:0:0:0:14f6:cc71:fc09:b45f%en0', os.name: 'Mac OS X', os.arch: 'x86_64', os.version: '10.15.4', java.version: '13.0.2'\nDriver info: driver.version: unknown\nremote stacktrace: ",
                  stack:
                    "Error: Could not create a session: The Safari instance terminated while trying to pair with it.\nBuild info: version: '3.141.5', revision: 'd54ebd709a', time: '2018-11-06T11:58:47'\nSystem info: host: 'MacBook-Pro-Olga.local', ip: 'fe80:0:0:0:14f6:cc71:fc09:b45f%en0', os.name: 'Mac OS X', os.arch: 'x86_64', os.version: '10.15.4', java.version: '13.0.2'\nDriver info: driver.version: unknown\nremote stacktrace: \n    at new RuntimeError (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/@gemini-testing/webdriverio/build/lib/utils/ErrorHandler.js:143:12)\n    at Request._callback (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/@gemini-testing/webdriverio/build/lib/utils/RequestHandler.js:322:39)\n    at Request.self.callback (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/request/request.js:185:22)\n    at Request.emit (events.js:189:13)\n    at Request.EventEmitter.emit (domain.js:441:20)\n    at Request.<anonymous> (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/request/request.js:1161:10)\n    at Request.emit (events.js:189:13)\n    at Request.EventEmitter.emit (domain.js:441:20)\n    at IncomingMessage.<anonymous> (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/request/request.js:1083:12)\n    at Object.onceWrapper (events.js:277:13)\n    at IncomingMessage.emit (events.js:194:15)\n    at IncomingMessage.EventEmitter.emit (domain.js:441:20)\n    at endReadableNT (_stream_readable.js:1125:12)\n    at process._tickCallback (internal/process/next_tick.js:63:19)",
                },
                attempt: 0,
              },
              retries: [],
            },
            {
              name: 'safariMobile',
              result: {
                suiteUrl: '/',
                name: 'safariMobile',
                metaInfo: {
                  url: '/',
                  file: 'src/__tests__/hermione/App.hermione.js',
                  sessionId: '3187EFE6-7CB2-447B-B234-80BD4EC4F623',
                },
                imagesInfo: [
                  {
                    status: 'updated',
                    actualImg: {
                      path: 'images/adf56b4/Default/safariMobile~current_0.png',
                      size: { width: 796, height: 1324 },
                    },
                    stateName: 'Default',
                    expectedImg: {
                      path: 'images/adf56b4/Default/safariMobile~ref_0.png',
                      size: { width: 796, height: 1324 },
                    },
                  },
                ],
                screenshot: false,
                multipleTabs: true,
                status: 'success',
                attempt: 0,
              },
              retries: [],
            },
          ],
          status: 'error',
        },
        {
          name: 'Feedback',
          suitePath: ['App', 'Feedback'],
          browsers: [
            {
              name: 'chrome',
              result: {
                suiteUrl: '/',
                name: 'chrome',
                metaInfo: {
                  pid: 56795,
                  url: '/',
                  file: 'src/__tests__/hermione/App.hermione.js',
                  sessionId: '5e9d87b862564382b8625cc093213231',
                },
                imagesInfo: [
                  {
                    stateName: 'Default',
                    refImg: {
                      path:
                        '/Users/olgapasynok/Documents/code/tested-storybook/hermione/screens/41c0fd2/chrome/Default.png',
                      size: { width: 222, height: 66 },
                    },
                    status: 'success',
                    expectedImg: {
                      path: 'images/41c0fd2/Default/chrome~ref_0.png',
                      size: { width: 222, height: 66 },
                    },
                  },
                  {
                    stateName: 'Focused',
                    refImg: {
                      path:
                        '/Users/olgapasynok/Documents/code/tested-storybook/hermione/screens/41c0fd2/chrome/Focused.png',
                      size: { width: 222, height: 66 },
                    },
                    status: 'success',
                    expectedImg: {
                      path: 'images/41c0fd2/Focused/chrome~ref_0.png',
                      size: { width: 222, height: 66 },
                    },
                  },
                  {
                    stateName: 'Disabled',
                    refImg: {
                      path:
                        '/Users/olgapasynok/Documents/code/tested-storybook/hermione/screens/41c0fd2/chrome/Disabled.png',
                      size: { width: 222, height: 66 },
                    },
                    status: 'success',
                    expectedImg: {
                      path: 'images/41c0fd2/Disabled/chrome~ref_0.png',
                      size: { width: 222, height: 66 },
                    },
                  },
                ],
                screenshot: false,
                multipleTabs: true,
                status: 'success',
                attempt: 0,
              },
              retries: [],
            },
            {
              name: 'chromeMobile',
              result: {
                suiteUrl: '/',
                name: 'chromeMobile',
                metaInfo: {
                  pid: 56795,
                  url: '/',
                  file: 'src/__tests__/hermione/App.hermione.js',
                  sessionId: '0a33f2a19b13bded668dd265e44be200',
                },
                imagesInfo: [
                  {
                    stateName: 'Default',
                    refImg: {
                      path:
                        '/Users/olgapasynok/Documents/code/tested-storybook/hermione/screens/41c0fd2/chromeMobile/Default.png',
                      size: { width: 202, height: 62 },
                    },
                    status: 'success',
                    expectedImg: {
                      path: 'images/41c0fd2/Default/chromeMobile~ref_0.png',
                      size: { width: 202, height: 62 },
                    },
                  },
                  {
                    stateName: 'Focused',
                    refImg: {
                      path:
                        '/Users/olgapasynok/Documents/code/tested-storybook/hermione/screens/41c0fd2/chromeMobile/Focused.png',
                      size: { width: 202, height: 62 },
                    },
                    status: 'success',
                    expectedImg: {
                      path: 'images/41c0fd2/Focused/chromeMobile~ref_0.png',
                      size: { width: 202, height: 62 },
                    },
                  },
                  {
                    stateName: 'Disabled',
                    refImg: {
                      path:
                        '/Users/olgapasynok/Documents/code/tested-storybook/hermione/screens/41c0fd2/chromeMobile/Disabled.png',
                      size: { width: 202, height: 62 },
                    },
                    status: 'success',
                    expectedImg: {
                      path: 'images/41c0fd2/Disabled/chromeMobile~ref_0.png',
                      size: { width: 202, height: 62 },
                    },
                  },
                ],
                screenshot: false,
                multipleTabs: true,
                status: 'success',
                attempt: 0,
              },
              retries: [],
            },
            {
              name: 'safariXL',
              result: {
                suiteUrl: '/',
                name: 'safariXL',
                metaInfo: {
                  url: '/',
                  file: 'src/__tests__/hermione/App.hermione.js',
                  sessionId: '0AA4FC82-1E04-4A37-9B44-C3C2C736E71B',
                },
                imagesInfo: [
                  {
                    status: 'updated',
                    actualImg: {
                      path: 'images/41c0fd2/Default/safariXL~current_0.png',
                      size: { width: 222, height: 66 },
                    },
                    stateName: 'Default',
                    expectedImg: {
                      path: 'images/41c0fd2/Default/safariXL~ref_0.png',
                      size: { width: 222, height: 66 },
                    },
                  },
                  {
                    status: 'updated',
                    actualImg: {
                      path: 'images/41c0fd2/Focused/safariXL~current_0.png',
                      size: { width: 222, height: 66 },
                    },
                    stateName: 'Focused',
                    expectedImg: {
                      path: 'images/41c0fd2/Focused/safariXL~ref_0.png',
                      size: { width: 222, height: 66 },
                    },
                  },
                  {
                    status: 'updated',
                    actualImg: {
                      path: 'images/41c0fd2/Disabled/safariXL~current_0.png',
                      size: { width: 222, height: 66 },
                    },
                    stateName: 'Disabled',
                    expectedImg: {
                      path: 'images/41c0fd2/Disabled/safariXL~ref_0.png',
                      size: { width: 222, height: 66 },
                    },
                  },
                ],
                screenshot: false,
                multipleTabs: true,
                status: 'success',
                attempt: 0,
              },
              retries: [],
            },
            {
              name: 'safariMobile',
              result: {
                suiteUrl: '/',
                name: 'safariMobile',
                metaInfo: {
                  url: '/',
                  file: 'src/__tests__/hermione/App.hermione.js',
                  sessionId: '3187EFE6-7CB2-447B-B234-80BD4EC4F623',
                },
                imagesInfo: [
                  {
                    status: 'updated',
                    actualImg: {
                      path: 'images/41c0fd2/Default/safariMobile~current_0.png',
                      size: { width: 202, height: 62 },
                    },
                    stateName: 'Default',
                    expectedImg: {
                      path: 'images/41c0fd2/Default/safariMobile~ref_0.png',
                      size: { width: 202, height: 62 },
                    },
                  },
                  {
                    status: 'updated',
                    actualImg: {
                      path: 'images/41c0fd2/Focused/safariMobile~current_0.png',
                      size: { width: 202, height: 62 },
                    },
                    stateName: 'Focused',
                    expectedImg: {
                      path: 'images/41c0fd2/Focused/safariMobile~ref_0.png',
                      size: { width: 202, height: 62 },
                    },
                  },
                  {
                    status: 'updated',
                    actualImg: {
                      path:
                        'images/41c0fd2/Disabled/safariMobile~current_0.png',
                      size: { width: 202, height: 62 },
                    },
                    stateName: 'Disabled',
                    expectedImg: {
                      path: 'images/41c0fd2/Disabled/safariMobile~ref_0.png',
                      size: { width: 202, height: 62 },
                    },
                  },
                ],
                screenshot: false,
                multipleTabs: true,
                status: 'success',
                attempt: 0,
              },
              retries: [],
            },
          ],
          status: 'success',
        },
      ],
      status: 'error',
    },
  ],
  config: {
    defaultView: 'all',
    baseHost: 'test.com',
    scaleImages: false,
    lazyLoadOffset: 800,
    errorPatterns: [
      {
        name: 'Parameter .* must be a string',
        pattern: 'Parameter .* must be a string',
      },
      {
        name: 'Cannot read property of undefined',
        pattern: 'Cannot read property .* of undefined',
      },
    ],
    metaInfoBaseUrls: {},
    customGui: {},
    customScripts: [],
  },
  apiValues: {
    extraItems: {},
    metaInfoExtenders: {},
    imagesSaver: {
      saveImg:
        'async (srcCurrPath, {destPath, reportDir}) => {\n        await utils.copyFileAsync(srcCurrPath, destPath, reportDir);\n\n        return destPath;\n    }',
    },
    reportsSaver: null,
  },
  date: 'Sun May 24 2020 12:48:39 GMT+0300 (Moscow Standard Time)',
  saveFormat: 'js',
};
try {
  module.exports = data;
} catch (e) {}

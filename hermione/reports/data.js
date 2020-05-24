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
                  sessionId: '05a45ff121e4afc8a7d9e0ef00243c33',
                },
                imagesInfo: [
                  {
                    status: 'updated',
                    actualImg: {
                      path: 'images/adf56b4/Default/chrome~current_2.png',
                      size: { width: 2368, height: 1642 },
                    },
                    stateName: 'Default',
                    expectedImg: {
                      path: 'images/adf56b4/Default/chrome~ref_2.png',
                      size: { width: 2368, height: 1642 },
                    },
                  },
                ],
                screenshot: false,
                multipleTabs: true,
                status: 'success',
                attempt: 2,
              },
              retries: [
                {
                  suiteUrl: '/',
                  name: 'chrome',
                  metaInfo: {
                    pid: 55029,
                    url: '/',
                    file: 'src/__tests__/hermione/App.hermione.js',
                    sessionId: 'f1a0bce2d8e452bf70d206a4b298de40',
                  },
                  imagesInfo: [
                    {
                      status: 'error',
                      error: {
                        message:
                          "Prepare screenshot failed with error type 'NOTFOUND' and error message: Could not find element with css selector specified in setCaptureElements: .app",
                        stack:
                          "Error: Prepare screenshot failed with error type 'NOTFOUND' and error message: Could not find element with css selector specified in setCaptureElements: .app\n    at ExistingBrowser.prepareScreenshot (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/hermione/lib/browser/existing-browser.js:157:19)\n    at process._tickCallback (internal/process/next_tick.js:68:7)",
                      },
                      actualImg: {
                        path: 'images/adf56b4/chrome~current_0.png',
                        size: { width: 2400, height: 1642 },
                      },
                    },
                  ],
                  screenshot: true,
                  multipleTabs: true,
                  status: 'error',
                  error: {
                    message:
                      "Prepare screenshot failed with error type 'NOTFOUND' and error message: Could not find element with css selector specified in setCaptureElements: .app",
                    stack:
                      "Error: Prepare screenshot failed with error type 'NOTFOUND' and error message: Could not find element with css selector specified in setCaptureElements: .app\n    at ExistingBrowser.prepareScreenshot (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/hermione/lib/browser/existing-browser.js:157:19)\n    at process._tickCallback (internal/process/next_tick.js:68:7)",
                  },
                  attempt: 0,
                },
                {
                  suiteUrl: '/',
                  name: 'chrome',
                  metaInfo: {
                    pid: 55089,
                    url: '/',
                    file: 'src/__tests__/hermione/App.hermione.js',
                    sessionId: '60e13a1b7dad4d9c97bfa1ee88344867',
                  },
                  imagesInfo: [
                    {
                      status: 'error',
                      error: {
                        message:
                          "Prepare screenshot failed with error type 'NOTFOUND' and error message: Could not find element with css selector specified in setCaptureElements: .app",
                        stack:
                          "Error: Prepare screenshot failed with error type 'NOTFOUND' and error message: Could not find element with css selector specified in setCaptureElements: .app\n    at ExistingBrowser.prepareScreenshot (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/hermione/lib/browser/existing-browser.js:157:19)\n    at process._tickCallback (internal/process/next_tick.js:68:7)",
                      },
                      actualImg: {
                        path: 'images/adf56b4/chrome~current_1.png',
                        size: { width: 2400, height: 1642 },
                      },
                    },
                  ],
                  screenshot: true,
                  multipleTabs: true,
                  status: 'error',
                  error: {
                    message:
                      "Prepare screenshot failed with error type 'NOTFOUND' and error message: Could not find element with css selector specified in setCaptureElements: .app",
                    stack:
                      "Error: Prepare screenshot failed with error type 'NOTFOUND' and error message: Could not find element with css selector specified in setCaptureElements: .app\n    at ExistingBrowser.prepareScreenshot (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/hermione/lib/browser/existing-browser.js:157:19)\n    at process._tickCallback (internal/process/next_tick.js:68:7)",
                  },
                  attempt: 1,
                },
              ],
            },
            {
              name: 'chromeMobile',
              result: {
                suiteUrl: '/',
                name: 'chromeMobile',
                metaInfo: {
                  url: '/',
                  file: 'src/__tests__/hermione/App.hermione.js',
                  sessionId: 'e3ada15b05744084896c6201310d257a',
                },
                imagesInfo: [
                  {
                    status: 'updated',
                    actualImg: {
                      path: 'images/adf56b4/Default/chromeMobile~current_2.png',
                      size: { width: 796, height: 1600 },
                    },
                    stateName: 'Default',
                    expectedImg: {
                      path: 'images/adf56b4/Default/chromeMobile~ref_2.png',
                      size: { width: 796, height: 1600 },
                    },
                  },
                ],
                screenshot: false,
                multipleTabs: true,
                status: 'success',
                attempt: 2,
              },
              retries: [
                {
                  suiteUrl: '/',
                  name: 'chromeMobile',
                  metaInfo: {
                    pid: 55029,
                    url: '/',
                    file: 'src/__tests__/hermione/App.hermione.js',
                    sessionId: '68b05485a6a7a02c08bfeecbadcaf14f',
                  },
                  imagesInfo: [
                    {
                      status: 'error',
                      error: {
                        message:
                          "Prepare screenshot failed with error type 'NOTFOUND' and error message: Could not find element with css selector specified in setCaptureElements: .app",
                        stack:
                          "Error: Prepare screenshot failed with error type 'NOTFOUND' and error message: Could not find element with css selector specified in setCaptureElements: .app\n    at ExistingBrowser.prepareScreenshot (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/hermione/lib/browser/existing-browser.js:157:19)\n    at process._tickCallback (internal/process/next_tick.js:68:7)",
                      },
                      actualImg: {
                        path: 'images/adf56b4/chromeMobile~current_0.png',
                        size: { width: 828, height: 1600 },
                      },
                    },
                  ],
                  screenshot: true,
                  multipleTabs: true,
                  status: 'error',
                  error: {
                    message:
                      "Prepare screenshot failed with error type 'NOTFOUND' and error message: Could not find element with css selector specified in setCaptureElements: .app",
                    stack:
                      "Error: Prepare screenshot failed with error type 'NOTFOUND' and error message: Could not find element with css selector specified in setCaptureElements: .app\n    at ExistingBrowser.prepareScreenshot (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/hermione/lib/browser/existing-browser.js:157:19)\n    at process._tickCallback (internal/process/next_tick.js:68:7)",
                  },
                  attempt: 0,
                },
                {
                  suiteUrl: '/',
                  name: 'chromeMobile',
                  metaInfo: {
                    pid: 55089,
                    url: '/',
                    file: 'src/__tests__/hermione/App.hermione.js',
                    sessionId: '8bd4da2fb48cfba19a5cb5db153574b2',
                  },
                  imagesInfo: [
                    {
                      status: 'error',
                      error: {
                        message:
                          "Prepare screenshot failed with error type 'NOTFOUND' and error message: Could not find element with css selector specified in setCaptureElements: .app",
                        stack:
                          "Error: Prepare screenshot failed with error type 'NOTFOUND' and error message: Could not find element with css selector specified in setCaptureElements: .app\n    at ExistingBrowser.prepareScreenshot (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/hermione/lib/browser/existing-browser.js:157:19)\n    at process._tickCallback (internal/process/next_tick.js:68:7)",
                      },
                      actualImg: {
                        path: 'images/adf56b4/chromeMobile~current_1.png',
                        size: { width: 828, height: 1600 },
                      },
                    },
                  ],
                  screenshot: true,
                  multipleTabs: true,
                  status: 'error',
                  error: {
                    message:
                      "Prepare screenshot failed with error type 'NOTFOUND' and error message: Could not find element with css selector specified in setCaptureElements: .app",
                    stack:
                      "Error: Prepare screenshot failed with error type 'NOTFOUND' and error message: Could not find element with css selector specified in setCaptureElements: .app\n    at ExistingBrowser.prepareScreenshot (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/hermione/lib/browser/existing-browser.js:157:19)\n    at process._tickCallback (internal/process/next_tick.js:68:7)",
                  },
                  attempt: 1,
                },
              ],
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
                    "Could not create a session: The Safari instance is already paired with another WebDriver session.\nBuild info: version: '3.141.5', revision: 'd54ebd709a', time: '2018-11-06T11:58:47'\nSystem info: host: 'MacBook-Pro-Olga.local', ip: 'fe80:0:0:0:14f6:cc71:fc09:b45f%en0', os.name: 'Mac OS X', os.arch: 'x86_64', os.version: '10.15.4', java.version: '13.0.2'\nDriver info: driver.version: unknown\nremote stacktrace: ",
                  stack:
                    "Error: Could not create a session: The Safari instance is already paired with another WebDriver session.\nBuild info: version: '3.141.5', revision: 'd54ebd709a', time: '2018-11-06T11:58:47'\nSystem info: host: 'MacBook-Pro-Olga.local', ip: 'fe80:0:0:0:14f6:cc71:fc09:b45f%en0', os.name: 'Mac OS X', os.arch: 'x86_64', os.version: '10.15.4', java.version: '13.0.2'\nDriver info: driver.version: unknown\nremote stacktrace: \n    at new RuntimeError (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/@gemini-testing/webdriverio/build/lib/utils/ErrorHandler.js:143:12)\n    at Request._callback (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/@gemini-testing/webdriverio/build/lib/utils/RequestHandler.js:322:39)\n    at Request.self.callback (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/request/request.js:185:22)\n    at Request.emit (events.js:189:13)\n    at Request.EventEmitter.emit (domain.js:441:20)\n    at Request.<anonymous> (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/request/request.js:1161:10)\n    at Request.emit (events.js:189:13)\n    at Request.EventEmitter.emit (domain.js:441:20)\n    at IncomingMessage.<anonymous> (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/request/request.js:1083:12)\n    at Object.onceWrapper (events.js:277:13)\n    at IncomingMessage.emit (events.js:194:15)\n    at IncomingMessage.EventEmitter.emit (domain.js:441:20)\n    at endReadableNT (_stream_readable.js:1125:12)\n    at process._tickCallback (internal/process/next_tick.js:63:19)",
                },
                attempt: 2,
              },
              retries: [
                {
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
                      "Could not create a session: The Safari instance is already paired with another WebDriver session.\nBuild info: version: '3.141.5', revision: 'd54ebd709a', time: '2018-11-06T11:58:47'\nSystem info: host: 'MacBook-Pro-Olga.local', ip: 'fe80:0:0:0:14f6:cc71:fc09:b45f%en0', os.name: 'Mac OS X', os.arch: 'x86_64', os.version: '10.15.4', java.version: '13.0.2'\nDriver info: driver.version: unknown\nremote stacktrace: ",
                    stack:
                      "Error: Could not create a session: The Safari instance is already paired with another WebDriver session.\nBuild info: version: '3.141.5', revision: 'd54ebd709a', time: '2018-11-06T11:58:47'\nSystem info: host: 'MacBook-Pro-Olga.local', ip: 'fe80:0:0:0:14f6:cc71:fc09:b45f%en0', os.name: 'Mac OS X', os.arch: 'x86_64', os.version: '10.15.4', java.version: '13.0.2'\nDriver info: driver.version: unknown\nremote stacktrace: \n    at new RuntimeError (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/@gemini-testing/webdriverio/build/lib/utils/ErrorHandler.js:143:12)\n    at Request._callback (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/@gemini-testing/webdriverio/build/lib/utils/RequestHandler.js:322:39)\n    at Request.self.callback (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/request/request.js:185:22)\n    at Request.emit (events.js:189:13)\n    at Request.EventEmitter.emit (domain.js:441:20)\n    at Request.<anonymous> (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/request/request.js:1161:10)\n    at Request.emit (events.js:189:13)\n    at Request.EventEmitter.emit (domain.js:441:20)\n    at IncomingMessage.<anonymous> (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/request/request.js:1083:12)\n    at Object.onceWrapper (events.js:277:13)\n    at IncomingMessage.emit (events.js:194:15)\n    at IncomingMessage.EventEmitter.emit (domain.js:441:20)\n    at endReadableNT (_stream_readable.js:1125:12)\n    at process._tickCallback (internal/process/next_tick.js:63:19)",
                  },
                  attempt: 0,
                },
                {
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
                      "Could not create a session: The Safari instance is already paired with another WebDriver session.\nBuild info: version: '3.141.5', revision: 'd54ebd709a', time: '2018-11-06T11:58:47'\nSystem info: host: 'MacBook-Pro-Olga.local', ip: 'fe80:0:0:0:14f6:cc71:fc09:b45f%en0', os.name: 'Mac OS X', os.arch: 'x86_64', os.version: '10.15.4', java.version: '13.0.2'\nDriver info: driver.version: unknown\nremote stacktrace: ",
                    stack:
                      "Error: Could not create a session: The Safari instance is already paired with another WebDriver session.\nBuild info: version: '3.141.5', revision: 'd54ebd709a', time: '2018-11-06T11:58:47'\nSystem info: host: 'MacBook-Pro-Olga.local', ip: 'fe80:0:0:0:14f6:cc71:fc09:b45f%en0', os.name: 'Mac OS X', os.arch: 'x86_64', os.version: '10.15.4', java.version: '13.0.2'\nDriver info: driver.version: unknown\nremote stacktrace: \n    at new RuntimeError (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/@gemini-testing/webdriverio/build/lib/utils/ErrorHandler.js:143:12)\n    at Request._callback (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/@gemini-testing/webdriverio/build/lib/utils/RequestHandler.js:322:39)\n    at Request.self.callback (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/request/request.js:185:22)\n    at Request.emit (events.js:189:13)\n    at Request.EventEmitter.emit (domain.js:441:20)\n    at Request.<anonymous> (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/request/request.js:1161:10)\n    at Request.emit (events.js:189:13)\n    at Request.EventEmitter.emit (domain.js:441:20)\n    at IncomingMessage.<anonymous> (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/request/request.js:1083:12)\n    at Object.onceWrapper (events.js:277:13)\n    at IncomingMessage.emit (events.js:194:15)\n    at IncomingMessage.EventEmitter.emit (domain.js:441:20)\n    at endReadableNT (_stream_readable.js:1125:12)\n    at process._tickCallback (internal/process/next_tick.js:63:19)",
                  },
                  attempt: 1,
                },
              ],
            },
            {
              name: 'safariMobile',
              result: {
                suiteUrl: '',
                name: 'safariMobile',
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
                    "Could not create a session: The Safari instance is already paired with another WebDriver session.\nBuild info: version: '3.141.5', revision: 'd54ebd709a', time: '2018-11-06T11:58:47'\nSystem info: host: 'MacBook-Pro-Olga.local', ip: 'fe80:0:0:0:14f6:cc71:fc09:b45f%en0', os.name: 'Mac OS X', os.arch: 'x86_64', os.version: '10.15.4', java.version: '13.0.2'\nDriver info: driver.version: unknown\nremote stacktrace: ",
                  stack:
                    "Error: Could not create a session: The Safari instance is already paired with another WebDriver session.\nBuild info: version: '3.141.5', revision: 'd54ebd709a', time: '2018-11-06T11:58:47'\nSystem info: host: 'MacBook-Pro-Olga.local', ip: 'fe80:0:0:0:14f6:cc71:fc09:b45f%en0', os.name: 'Mac OS X', os.arch: 'x86_64', os.version: '10.15.4', java.version: '13.0.2'\nDriver info: driver.version: unknown\nremote stacktrace: \n    at new RuntimeError (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/@gemini-testing/webdriverio/build/lib/utils/ErrorHandler.js:143:12)\n    at Request._callback (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/@gemini-testing/webdriverio/build/lib/utils/RequestHandler.js:322:39)\n    at Request.self.callback (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/request/request.js:185:22)\n    at Request.emit (events.js:189:13)\n    at Request.EventEmitter.emit (domain.js:441:20)\n    at Request.<anonymous> (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/request/request.js:1161:10)\n    at Request.emit (events.js:189:13)\n    at Request.EventEmitter.emit (domain.js:441:20)\n    at IncomingMessage.<anonymous> (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/request/request.js:1083:12)\n    at Object.onceWrapper (events.js:277:13)\n    at IncomingMessage.emit (events.js:194:15)\n    at IncomingMessage.EventEmitter.emit (domain.js:441:20)\n    at endReadableNT (_stream_readable.js:1125:12)\n    at process._tickCallback (internal/process/next_tick.js:63:19)",
                },
                attempt: 2,
              },
              retries: [
                {
                  suiteUrl: '',
                  name: 'safariMobile',
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
                      "Could not create a session: The Safari instance is already paired with another WebDriver session.\nBuild info: version: '3.141.5', revision: 'd54ebd709a', time: '2018-11-06T11:58:47'\nSystem info: host: 'MacBook-Pro-Olga.local', ip: 'fe80:0:0:0:14f6:cc71:fc09:b45f%en0', os.name: 'Mac OS X', os.arch: 'x86_64', os.version: '10.15.4', java.version: '13.0.2'\nDriver info: driver.version: unknown\nremote stacktrace: ",
                    stack:
                      "Error: Could not create a session: The Safari instance is already paired with another WebDriver session.\nBuild info: version: '3.141.5', revision: 'd54ebd709a', time: '2018-11-06T11:58:47'\nSystem info: host: 'MacBook-Pro-Olga.local', ip: 'fe80:0:0:0:14f6:cc71:fc09:b45f%en0', os.name: 'Mac OS X', os.arch: 'x86_64', os.version: '10.15.4', java.version: '13.0.2'\nDriver info: driver.version: unknown\nremote stacktrace: \n    at new RuntimeError (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/@gemini-testing/webdriverio/build/lib/utils/ErrorHandler.js:143:12)\n    at Request._callback (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/@gemini-testing/webdriverio/build/lib/utils/RequestHandler.js:322:39)\n    at Request.self.callback (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/request/request.js:185:22)\n    at Request.emit (events.js:189:13)\n    at Request.EventEmitter.emit (domain.js:441:20)\n    at Request.<anonymous> (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/request/request.js:1161:10)\n    at Request.emit (events.js:189:13)\n    at Request.EventEmitter.emit (domain.js:441:20)\n    at IncomingMessage.<anonymous> (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/request/request.js:1083:12)\n    at Object.onceWrapper (events.js:277:13)\n    at IncomingMessage.emit (events.js:194:15)\n    at IncomingMessage.EventEmitter.emit (domain.js:441:20)\n    at endReadableNT (_stream_readable.js:1125:12)\n    at process._tickCallback (internal/process/next_tick.js:63:19)",
                  },
                  attempt: 0,
                },
                {
                  suiteUrl: '',
                  name: 'safariMobile',
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
                      "Could not create a session: The Safari instance is already paired with another WebDriver session.\nBuild info: version: '3.141.5', revision: 'd54ebd709a', time: '2018-11-06T11:58:47'\nSystem info: host: 'MacBook-Pro-Olga.local', ip: 'fe80:0:0:0:14f6:cc71:fc09:b45f%en0', os.name: 'Mac OS X', os.arch: 'x86_64', os.version: '10.15.4', java.version: '13.0.2'\nDriver info: driver.version: unknown\nremote stacktrace: ",
                    stack:
                      "Error: Could not create a session: The Safari instance is already paired with another WebDriver session.\nBuild info: version: '3.141.5', revision: 'd54ebd709a', time: '2018-11-06T11:58:47'\nSystem info: host: 'MacBook-Pro-Olga.local', ip: 'fe80:0:0:0:14f6:cc71:fc09:b45f%en0', os.name: 'Mac OS X', os.arch: 'x86_64', os.version: '10.15.4', java.version: '13.0.2'\nDriver info: driver.version: unknown\nremote stacktrace: \n    at new RuntimeError (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/@gemini-testing/webdriverio/build/lib/utils/ErrorHandler.js:143:12)\n    at Request._callback (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/@gemini-testing/webdriverio/build/lib/utils/RequestHandler.js:322:39)\n    at Request.self.callback (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/request/request.js:185:22)\n    at Request.emit (events.js:189:13)\n    at Request.EventEmitter.emit (domain.js:441:20)\n    at Request.<anonymous> (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/request/request.js:1161:10)\n    at Request.emit (events.js:189:13)\n    at Request.EventEmitter.emit (domain.js:441:20)\n    at IncomingMessage.<anonymous> (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/request/request.js:1083:12)\n    at Object.onceWrapper (events.js:277:13)\n    at IncomingMessage.emit (events.js:194:15)\n    at IncomingMessage.EventEmitter.emit (domain.js:441:20)\n    at endReadableNT (_stream_readable.js:1125:12)\n    at process._tickCallback (internal/process/next_tick.js:63:19)",
                  },
                  attempt: 1,
                },
              ],
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
                  url: '/',
                  file: 'src/__tests__/hermione/App.hermione.js',
                  sessionId: '05a45ff121e4afc8a7d9e0ef00243c33',
                },
                imagesInfo: [
                  {
                    status: 'updated',
                    actualImg: {
                      path: 'images/41c0fd2/Default/chrome~current_2.png',
                      size: { width: 222, height: 66 },
                    },
                    stateName: 'Default',
                    expectedImg: {
                      path: 'images/41c0fd2/Default/chrome~ref_2.png',
                      size: { width: 222, height: 66 },
                    },
                  },
                  {
                    status: 'updated',
                    actualImg: {
                      path: 'images/41c0fd2/Focused/chrome~current_2.png',
                      size: { width: 222, height: 66 },
                    },
                    stateName: 'Focused',
                    expectedImg: {
                      path: 'images/41c0fd2/Focused/chrome~ref_2.png',
                      size: { width: 222, height: 66 },
                    },
                  },
                  {
                    status: 'updated',
                    actualImg: {
                      path: 'images/41c0fd2/Disabled/chrome~current_2.png',
                      size: { width: 222, height: 66 },
                    },
                    stateName: 'Disabled',
                    expectedImg: {
                      path: 'images/41c0fd2/Disabled/chrome~ref_2.png',
                      size: { width: 222, height: 66 },
                    },
                  },
                ],
                screenshot: false,
                multipleTabs: true,
                status: 'success',
                attempt: 2,
              },
              retries: [
                {
                  suiteUrl: '/',
                  name: 'chrome',
                  metaInfo: {
                    pid: 55029,
                    url: '/',
                    file: 'src/__tests__/hermione/App.hermione.js',
                    sessionId: 'f1a0bce2d8e452bf70d206a4b298de40',
                  },
                  imagesInfo: [
                    {
                      status: 'error',
                      error: {
                        message:
                          "Prepare screenshot failed with error type 'NOTFOUND' and error message: Could not find element with css selector specified in setCaptureElements: [data-testid='button']",
                        stack:
                          'Error: Prepare screenshot failed with error type \'NOTFOUND\' and error message: Could not find element with css selector specified in setCaptureElements: [data-testid=\'button\']\n    at execute("return typeof __geminiCore !== "undefined" ? __geminiCore.prepareScreenshot(["[data-testid=\'button\'...) (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/hermione/lib/browser/existing-browser.js:167:30)\n    at assertView("Default", "[data-testid=\'button\']") (/Users/olgapasynok/Documents/code/tested-storybook/src/__tests__/hermione/App.hermione.js:15:8)\n    at execute("return typeof __geminiCore !== "undefined" ? __geminiCore.resetZoom() : {isClientScriptNotInjected:...) (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/hermione/lib/browser/existing-browser.js:167:30)\n    at execute("(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&...) (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/hermione/lib/browser/existing-browser.js:171:30)\n    at execute("return typeof __geminiCore !== "undefined" ? __geminiCore.resetZoom() : {isClientScriptNotInjected:...) (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/hermione/lib/browser/existing-browser.js:167:30)\n    at url("http://localhost:12345/") (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/hermione/lib/browser/existing-browser.js:57:20)\n    at url("/") (/Users/olgapasynok/Documents/code/tested-storybook/src/__tests__/hermione/App.hermione.js:14:8)\n    at moveTo("0.7558212082211992-1", 0, 0) (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/@gemini-testing/webdriverio/build/lib/commands/moveToObject.js:55:22)\n    at element("body") (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/@gemini-testing/webdriverio/build/lib/commands/moveToObject.js:47:17)\n    at moveToObject("body", 0, 0) (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/hermione/lib/worker/runner/test-runner/index.js:90:33)',
                      },
                      actualImg: {
                        path: 'images/41c0fd2/chrome~current_0.png',
                        size: { width: 2400, height: 1642 },
                      },
                    },
                  ],
                  screenshot: true,
                  multipleTabs: true,
                  status: 'error',
                  error: {
                    message:
                      "Prepare screenshot failed with error type 'NOTFOUND' and error message: Could not find element with css selector specified in setCaptureElements: [data-testid='button']",
                    stack:
                      'Error: Prepare screenshot failed with error type \'NOTFOUND\' and error message: Could not find element with css selector specified in setCaptureElements: [data-testid=\'button\']\n    at execute("return typeof __geminiCore !== "undefined" ? __geminiCore.prepareScreenshot(["[data-testid=\'button\'...) (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/hermione/lib/browser/existing-browser.js:167:30)\n    at assertView("Default", "[data-testid=\'button\']") (/Users/olgapasynok/Documents/code/tested-storybook/src/__tests__/hermione/App.hermione.js:15:8)\n    at execute("return typeof __geminiCore !== "undefined" ? __geminiCore.resetZoom() : {isClientScriptNotInjected:...) (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/hermione/lib/browser/existing-browser.js:167:30)\n    at execute("(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&...) (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/hermione/lib/browser/existing-browser.js:171:30)\n    at execute("return typeof __geminiCore !== "undefined" ? __geminiCore.resetZoom() : {isClientScriptNotInjected:...) (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/hermione/lib/browser/existing-browser.js:167:30)\n    at url("http://localhost:12345/") (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/hermione/lib/browser/existing-browser.js:57:20)\n    at url("/") (/Users/olgapasynok/Documents/code/tested-storybook/src/__tests__/hermione/App.hermione.js:14:8)\n    at moveTo("0.7558212082211992-1", 0, 0) (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/@gemini-testing/webdriverio/build/lib/commands/moveToObject.js:55:22)\n    at element("body") (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/@gemini-testing/webdriverio/build/lib/commands/moveToObject.js:47:17)\n    at moveToObject("body", 0, 0) (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/hermione/lib/worker/runner/test-runner/index.js:90:33)',
                  },
                  attempt: 0,
                },
                {
                  suiteUrl: '/',
                  name: 'chrome',
                  metaInfo: {
                    pid: 55089,
                    url: '/',
                    file: 'src/__tests__/hermione/App.hermione.js',
                    sessionId: '60e13a1b7dad4d9c97bfa1ee88344867',
                  },
                  imagesInfo: [
                    {
                      status: 'error',
                      error: {
                        message:
                          "Prepare screenshot failed with error type 'NOTFOUND' and error message: Could not find element with css selector specified in setCaptureElements: [data-testid='button']",
                        stack:
                          'Error: Prepare screenshot failed with error type \'NOTFOUND\' and error message: Could not find element with css selector specified in setCaptureElements: [data-testid=\'button\']\n    at execute("return typeof __geminiCore !== "undefined" ? __geminiCore.prepareScreenshot(["[data-testid=\'button\'...) (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/hermione/lib/browser/existing-browser.js:167:30)\n    at assertView("Default", "[data-testid=\'button\']") (/Users/olgapasynok/Documents/code/tested-storybook/src/__tests__/hermione/App.hermione.js:15:8)\n    at execute("return typeof __geminiCore !== "undefined" ? __geminiCore.resetZoom() : {isClientScriptNotInjected:...) (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/hermione/lib/browser/existing-browser.js:167:30)\n    at execute("(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&...) (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/hermione/lib/browser/existing-browser.js:171:30)\n    at execute("return typeof __geminiCore !== "undefined" ? __geminiCore.resetZoom() : {isClientScriptNotInjected:...) (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/hermione/lib/browser/existing-browser.js:167:30)\n    at url("http://localhost:12345/") (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/hermione/lib/browser/existing-browser.js:57:20)\n    at url("/") (/Users/olgapasynok/Documents/code/tested-storybook/src/__tests__/hermione/App.hermione.js:14:8)\n    at moveTo("0.3185927025191826-1", 0, 0) (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/@gemini-testing/webdriverio/build/lib/commands/moveToObject.js:55:22)\n    at element("body") (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/@gemini-testing/webdriverio/build/lib/commands/moveToObject.js:47:17)\n    at moveToObject("body", 0, 0) (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/hermione/lib/worker/runner/test-runner/index.js:90:33)',
                      },
                      actualImg: {
                        path: 'images/41c0fd2/chrome~current_1.png',
                        size: { width: 2400, height: 1642 },
                      },
                    },
                  ],
                  screenshot: true,
                  multipleTabs: true,
                  status: 'error',
                  error: {
                    message:
                      "Prepare screenshot failed with error type 'NOTFOUND' and error message: Could not find element with css selector specified in setCaptureElements: [data-testid='button']",
                    stack:
                      'Error: Prepare screenshot failed with error type \'NOTFOUND\' and error message: Could not find element with css selector specified in setCaptureElements: [data-testid=\'button\']\n    at execute("return typeof __geminiCore !== "undefined" ? __geminiCore.prepareScreenshot(["[data-testid=\'button\'...) (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/hermione/lib/browser/existing-browser.js:167:30)\n    at assertView("Default", "[data-testid=\'button\']") (/Users/olgapasynok/Documents/code/tested-storybook/src/__tests__/hermione/App.hermione.js:15:8)\n    at execute("return typeof __geminiCore !== "undefined" ? __geminiCore.resetZoom() : {isClientScriptNotInjected:...) (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/hermione/lib/browser/existing-browser.js:167:30)\n    at execute("(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&...) (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/hermione/lib/browser/existing-browser.js:171:30)\n    at execute("return typeof __geminiCore !== "undefined" ? __geminiCore.resetZoom() : {isClientScriptNotInjected:...) (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/hermione/lib/browser/existing-browser.js:167:30)\n    at url("http://localhost:12345/") (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/hermione/lib/browser/existing-browser.js:57:20)\n    at url("/") (/Users/olgapasynok/Documents/code/tested-storybook/src/__tests__/hermione/App.hermione.js:14:8)\n    at moveTo("0.3185927025191826-1", 0, 0) (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/@gemini-testing/webdriverio/build/lib/commands/moveToObject.js:55:22)\n    at element("body") (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/@gemini-testing/webdriverio/build/lib/commands/moveToObject.js:47:17)\n    at moveToObject("body", 0, 0) (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/hermione/lib/worker/runner/test-runner/index.js:90:33)',
                  },
                  attempt: 1,
                },
              ],
            },
            {
              name: 'chromeMobile',
              result: {
                suiteUrl: '/',
                name: 'chromeMobile',
                metaInfo: {
                  url: '/',
                  file: 'src/__tests__/hermione/App.hermione.js',
                  sessionId: 'e3ada15b05744084896c6201310d257a',
                },
                imagesInfo: [
                  {
                    status: 'updated',
                    actualImg: {
                      path: 'images/41c0fd2/Default/chromeMobile~current_2.png',
                      size: { width: 202, height: 62 },
                    },
                    stateName: 'Default',
                    expectedImg: {
                      path: 'images/41c0fd2/Default/chromeMobile~ref_2.png',
                      size: { width: 202, height: 62 },
                    },
                  },
                  {
                    status: 'updated',
                    actualImg: {
                      path: 'images/41c0fd2/Focused/chromeMobile~current_2.png',
                      size: { width: 202, height: 62 },
                    },
                    stateName: 'Focused',
                    expectedImg: {
                      path: 'images/41c0fd2/Focused/chromeMobile~ref_2.png',
                      size: { width: 202, height: 62 },
                    },
                  },
                  {
                    status: 'updated',
                    actualImg: {
                      path:
                        'images/41c0fd2/Disabled/chromeMobile~current_2.png',
                      size: { width: 202, height: 62 },
                    },
                    stateName: 'Disabled',
                    expectedImg: {
                      path: 'images/41c0fd2/Disabled/chromeMobile~ref_2.png',
                      size: { width: 202, height: 62 },
                    },
                  },
                ],
                screenshot: false,
                multipleTabs: true,
                status: 'success',
                attempt: 2,
              },
              retries: [
                {
                  suiteUrl: '/',
                  name: 'chromeMobile',
                  metaInfo: {
                    pid: 55029,
                    url: '/',
                    file: 'src/__tests__/hermione/App.hermione.js',
                    sessionId: '68b05485a6a7a02c08bfeecbadcaf14f',
                  },
                  imagesInfo: [
                    {
                      status: 'error',
                      error: {
                        message:
                          "Prepare screenshot failed with error type 'NOTFOUND' and error message: Could not find element with css selector specified in setCaptureElements: [data-testid='button']",
                        stack:
                          'Error: Prepare screenshot failed with error type \'NOTFOUND\' and error message: Could not find element with css selector specified in setCaptureElements: [data-testid=\'button\']\n    at execute("return typeof __geminiCore !== "undefined" ? __geminiCore.prepareScreenshot(["[data-testid=\'button\'...) (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/hermione/lib/browser/existing-browser.js:167:30)\n    at assertView("Default", "[data-testid=\'button\']") (/Users/olgapasynok/Documents/code/tested-storybook/src/__tests__/hermione/App.hermione.js:15:8)\n    at execute("return typeof __geminiCore !== "undefined" ? __geminiCore.resetZoom() : {isClientScriptNotInjected:...) (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/hermione/lib/browser/existing-browser.js:167:30)\n    at execute("(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&...) (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/hermione/lib/browser/existing-browser.js:171:30)\n    at execute("return typeof __geminiCore !== "undefined" ? __geminiCore.resetZoom() : {isClientScriptNotInjected:...) (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/hermione/lib/browser/existing-browser.js:167:30)\n    at url("http://localhost:12345/") (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/hermione/lib/browser/existing-browser.js:57:20)\n    at url("/") (/Users/olgapasynok/Documents/code/tested-storybook/src/__tests__/hermione/App.hermione.js:14:8)\n    at moveTo("0.6448991544036808-1", 0, 0) (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/@gemini-testing/webdriverio/build/lib/commands/moveToObject.js:55:22)\n    at element("body") (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/@gemini-testing/webdriverio/build/lib/commands/moveToObject.js:47:17)\n    at moveToObject("body", 0, 0) (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/hermione/lib/worker/runner/test-runner/index.js:90:33)',
                      },
                      actualImg: {
                        path: 'images/41c0fd2/chromeMobile~current_0.png',
                        size: { width: 828, height: 1600 },
                      },
                    },
                  ],
                  screenshot: true,
                  multipleTabs: true,
                  status: 'error',
                  error: {
                    message:
                      "Prepare screenshot failed with error type 'NOTFOUND' and error message: Could not find element with css selector specified in setCaptureElements: [data-testid='button']",
                    stack:
                      'Error: Prepare screenshot failed with error type \'NOTFOUND\' and error message: Could not find element with css selector specified in setCaptureElements: [data-testid=\'button\']\n    at execute("return typeof __geminiCore !== "undefined" ? __geminiCore.prepareScreenshot(["[data-testid=\'button\'...) (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/hermione/lib/browser/existing-browser.js:167:30)\n    at assertView("Default", "[data-testid=\'button\']") (/Users/olgapasynok/Documents/code/tested-storybook/src/__tests__/hermione/App.hermione.js:15:8)\n    at execute("return typeof __geminiCore !== "undefined" ? __geminiCore.resetZoom() : {isClientScriptNotInjected:...) (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/hermione/lib/browser/existing-browser.js:167:30)\n    at execute("(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&...) (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/hermione/lib/browser/existing-browser.js:171:30)\n    at execute("return typeof __geminiCore !== "undefined" ? __geminiCore.resetZoom() : {isClientScriptNotInjected:...) (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/hermione/lib/browser/existing-browser.js:167:30)\n    at url("http://localhost:12345/") (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/hermione/lib/browser/existing-browser.js:57:20)\n    at url("/") (/Users/olgapasynok/Documents/code/tested-storybook/src/__tests__/hermione/App.hermione.js:14:8)\n    at moveTo("0.6448991544036808-1", 0, 0) (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/@gemini-testing/webdriverio/build/lib/commands/moveToObject.js:55:22)\n    at element("body") (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/@gemini-testing/webdriverio/build/lib/commands/moveToObject.js:47:17)\n    at moveToObject("body", 0, 0) (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/hermione/lib/worker/runner/test-runner/index.js:90:33)',
                  },
                  attempt: 0,
                },
                {
                  suiteUrl: '/',
                  name: 'chromeMobile',
                  metaInfo: {
                    pid: 55089,
                    url: '/',
                    file: 'src/__tests__/hermione/App.hermione.js',
                    sessionId: '8bd4da2fb48cfba19a5cb5db153574b2',
                  },
                  imagesInfo: [
                    {
                      status: 'error',
                      error: {
                        message:
                          "Prepare screenshot failed with error type 'NOTFOUND' and error message: Could not find element with css selector specified in setCaptureElements: [data-testid='button']",
                        stack:
                          'Error: Prepare screenshot failed with error type \'NOTFOUND\' and error message: Could not find element with css selector specified in setCaptureElements: [data-testid=\'button\']\n    at execute("return typeof __geminiCore !== "undefined" ? __geminiCore.prepareScreenshot(["[data-testid=\'button\'...) (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/hermione/lib/browser/existing-browser.js:167:30)\n    at assertView("Default", "[data-testid=\'button\']") (/Users/olgapasynok/Documents/code/tested-storybook/src/__tests__/hermione/App.hermione.js:15:8)\n    at execute("return typeof __geminiCore !== "undefined" ? __geminiCore.resetZoom() : {isClientScriptNotInjected:...) (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/hermione/lib/browser/existing-browser.js:167:30)\n    at execute("(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&...) (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/hermione/lib/browser/existing-browser.js:171:30)\n    at execute("return typeof __geminiCore !== "undefined" ? __geminiCore.resetZoom() : {isClientScriptNotInjected:...) (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/hermione/lib/browser/existing-browser.js:167:30)\n    at url("http://localhost:12345/") (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/hermione/lib/browser/existing-browser.js:57:20)\n    at url("/") (/Users/olgapasynok/Documents/code/tested-storybook/src/__tests__/hermione/App.hermione.js:14:8)\n    at moveTo("0.3500927793858504-1", 0, 0) (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/@gemini-testing/webdriverio/build/lib/commands/moveToObject.js:55:22)\n    at element("body") (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/@gemini-testing/webdriverio/build/lib/commands/moveToObject.js:47:17)\n    at moveToObject("body", 0, 0) (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/hermione/lib/worker/runner/test-runner/index.js:90:33)',
                      },
                      actualImg: {
                        path: 'images/41c0fd2/chromeMobile~current_1.png',
                        size: { width: 828, height: 1600 },
                      },
                    },
                  ],
                  screenshot: true,
                  multipleTabs: true,
                  status: 'error',
                  error: {
                    message:
                      "Prepare screenshot failed with error type 'NOTFOUND' and error message: Could not find element with css selector specified in setCaptureElements: [data-testid='button']",
                    stack:
                      'Error: Prepare screenshot failed with error type \'NOTFOUND\' and error message: Could not find element with css selector specified in setCaptureElements: [data-testid=\'button\']\n    at execute("return typeof __geminiCore !== "undefined" ? __geminiCore.prepareScreenshot(["[data-testid=\'button\'...) (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/hermione/lib/browser/existing-browser.js:167:30)\n    at assertView("Default", "[data-testid=\'button\']") (/Users/olgapasynok/Documents/code/tested-storybook/src/__tests__/hermione/App.hermione.js:15:8)\n    at execute("return typeof __geminiCore !== "undefined" ? __geminiCore.resetZoom() : {isClientScriptNotInjected:...) (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/hermione/lib/browser/existing-browser.js:167:30)\n    at execute("(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&...) (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/hermione/lib/browser/existing-browser.js:171:30)\n    at execute("return typeof __geminiCore !== "undefined" ? __geminiCore.resetZoom() : {isClientScriptNotInjected:...) (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/hermione/lib/browser/existing-browser.js:167:30)\n    at url("http://localhost:12345/") (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/hermione/lib/browser/existing-browser.js:57:20)\n    at url("/") (/Users/olgapasynok/Documents/code/tested-storybook/src/__tests__/hermione/App.hermione.js:14:8)\n    at moveTo("0.3500927793858504-1", 0, 0) (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/@gemini-testing/webdriverio/build/lib/commands/moveToObject.js:55:22)\n    at element("body") (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/@gemini-testing/webdriverio/build/lib/commands/moveToObject.js:47:17)\n    at moveToObject("body", 0, 0) (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/hermione/lib/worker/runner/test-runner/index.js:90:33)',
                  },
                  attempt: 1,
                },
              ],
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
                    "Could not create a session: The Safari instance is already paired with another WebDriver session.\nBuild info: version: '3.141.5', revision: 'd54ebd709a', time: '2018-11-06T11:58:47'\nSystem info: host: 'MacBook-Pro-Olga.local', ip: 'fe80:0:0:0:14f6:cc71:fc09:b45f%en0', os.name: 'Mac OS X', os.arch: 'x86_64', os.version: '10.15.4', java.version: '13.0.2'\nDriver info: driver.version: unknown\nremote stacktrace: ",
                  stack:
                    "Error: Could not create a session: The Safari instance is already paired with another WebDriver session.\nBuild info: version: '3.141.5', revision: 'd54ebd709a', time: '2018-11-06T11:58:47'\nSystem info: host: 'MacBook-Pro-Olga.local', ip: 'fe80:0:0:0:14f6:cc71:fc09:b45f%en0', os.name: 'Mac OS X', os.arch: 'x86_64', os.version: '10.15.4', java.version: '13.0.2'\nDriver info: driver.version: unknown\nremote stacktrace: \n    at new RuntimeError (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/@gemini-testing/webdriverio/build/lib/utils/ErrorHandler.js:143:12)\n    at Request._callback (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/@gemini-testing/webdriverio/build/lib/utils/RequestHandler.js:322:39)\n    at Request.self.callback (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/request/request.js:185:22)\n    at Request.emit (events.js:189:13)\n    at Request.EventEmitter.emit (domain.js:441:20)\n    at Request.<anonymous> (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/request/request.js:1161:10)\n    at Request.emit (events.js:189:13)\n    at Request.EventEmitter.emit (domain.js:441:20)\n    at IncomingMessage.<anonymous> (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/request/request.js:1083:12)\n    at Object.onceWrapper (events.js:277:13)\n    at IncomingMessage.emit (events.js:194:15)\n    at IncomingMessage.EventEmitter.emit (domain.js:441:20)\n    at endReadableNT (_stream_readable.js:1125:12)\n    at process._tickCallback (internal/process/next_tick.js:63:19)",
                },
                attempt: 2,
              },
              retries: [
                {
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
                      "Could not create a session: The Safari instance is already paired with another WebDriver session.\nBuild info: version: '3.141.5', revision: 'd54ebd709a', time: '2018-11-06T11:58:47'\nSystem info: host: 'MacBook-Pro-Olga.local', ip: 'fe80:0:0:0:14f6:cc71:fc09:b45f%en0', os.name: 'Mac OS X', os.arch: 'x86_64', os.version: '10.15.4', java.version: '13.0.2'\nDriver info: driver.version: unknown\nremote stacktrace: ",
                    stack:
                      "Error: Could not create a session: The Safari instance is already paired with another WebDriver session.\nBuild info: version: '3.141.5', revision: 'd54ebd709a', time: '2018-11-06T11:58:47'\nSystem info: host: 'MacBook-Pro-Olga.local', ip: 'fe80:0:0:0:14f6:cc71:fc09:b45f%en0', os.name: 'Mac OS X', os.arch: 'x86_64', os.version: '10.15.4', java.version: '13.0.2'\nDriver info: driver.version: unknown\nremote stacktrace: \n    at new RuntimeError (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/@gemini-testing/webdriverio/build/lib/utils/ErrorHandler.js:143:12)\n    at Request._callback (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/@gemini-testing/webdriverio/build/lib/utils/RequestHandler.js:322:39)\n    at Request.self.callback (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/request/request.js:185:22)\n    at Request.emit (events.js:189:13)\n    at Request.EventEmitter.emit (domain.js:441:20)\n    at Request.<anonymous> (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/request/request.js:1161:10)\n    at Request.emit (events.js:189:13)\n    at Request.EventEmitter.emit (domain.js:441:20)\n    at IncomingMessage.<anonymous> (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/request/request.js:1083:12)\n    at Object.onceWrapper (events.js:277:13)\n    at IncomingMessage.emit (events.js:194:15)\n    at IncomingMessage.EventEmitter.emit (domain.js:441:20)\n    at endReadableNT (_stream_readable.js:1125:12)\n    at process._tickCallback (internal/process/next_tick.js:63:19)",
                  },
                  attempt: 0,
                },
                {
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
                      "Could not create a session: The Safari instance is already paired with another WebDriver session.\nBuild info: version: '3.141.5', revision: 'd54ebd709a', time: '2018-11-06T11:58:47'\nSystem info: host: 'MacBook-Pro-Olga.local', ip: 'fe80:0:0:0:14f6:cc71:fc09:b45f%en0', os.name: 'Mac OS X', os.arch: 'x86_64', os.version: '10.15.4', java.version: '13.0.2'\nDriver info: driver.version: unknown\nremote stacktrace: ",
                    stack:
                      "Error: Could not create a session: The Safari instance is already paired with another WebDriver session.\nBuild info: version: '3.141.5', revision: 'd54ebd709a', time: '2018-11-06T11:58:47'\nSystem info: host: 'MacBook-Pro-Olga.local', ip: 'fe80:0:0:0:14f6:cc71:fc09:b45f%en0', os.name: 'Mac OS X', os.arch: 'x86_64', os.version: '10.15.4', java.version: '13.0.2'\nDriver info: driver.version: unknown\nremote stacktrace: \n    at new RuntimeError (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/@gemini-testing/webdriverio/build/lib/utils/ErrorHandler.js:143:12)\n    at Request._callback (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/@gemini-testing/webdriverio/build/lib/utils/RequestHandler.js:322:39)\n    at Request.self.callback (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/request/request.js:185:22)\n    at Request.emit (events.js:189:13)\n    at Request.EventEmitter.emit (domain.js:441:20)\n    at Request.<anonymous> (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/request/request.js:1161:10)\n    at Request.emit (events.js:189:13)\n    at Request.EventEmitter.emit (domain.js:441:20)\n    at IncomingMessage.<anonymous> (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/request/request.js:1083:12)\n    at Object.onceWrapper (events.js:277:13)\n    at IncomingMessage.emit (events.js:194:15)\n    at IncomingMessage.EventEmitter.emit (domain.js:441:20)\n    at endReadableNT (_stream_readable.js:1125:12)\n    at process._tickCallback (internal/process/next_tick.js:63:19)",
                  },
                  attempt: 1,
                },
              ],
            },
            {
              name: 'safariMobile',
              result: {
                suiteUrl: '',
                name: 'safariMobile',
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
                    "Could not create a session: The Safari instance is already paired with another WebDriver session.\nBuild info: version: '3.141.5', revision: 'd54ebd709a', time: '2018-11-06T11:58:47'\nSystem info: host: 'MacBook-Pro-Olga.local', ip: 'fe80:0:0:0:14f6:cc71:fc09:b45f%en0', os.name: 'Mac OS X', os.arch: 'x86_64', os.version: '10.15.4', java.version: '13.0.2'\nDriver info: driver.version: unknown\nremote stacktrace: ",
                  stack:
                    "Error: Could not create a session: The Safari instance is already paired with another WebDriver session.\nBuild info: version: '3.141.5', revision: 'd54ebd709a', time: '2018-11-06T11:58:47'\nSystem info: host: 'MacBook-Pro-Olga.local', ip: 'fe80:0:0:0:14f6:cc71:fc09:b45f%en0', os.name: 'Mac OS X', os.arch: 'x86_64', os.version: '10.15.4', java.version: '13.0.2'\nDriver info: driver.version: unknown\nremote stacktrace: \n    at new RuntimeError (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/@gemini-testing/webdriverio/build/lib/utils/ErrorHandler.js:143:12)\n    at Request._callback (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/@gemini-testing/webdriverio/build/lib/utils/RequestHandler.js:322:39)\n    at Request.self.callback (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/request/request.js:185:22)\n    at Request.emit (events.js:189:13)\n    at Request.EventEmitter.emit (domain.js:441:20)\n    at Request.<anonymous> (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/request/request.js:1161:10)\n    at Request.emit (events.js:189:13)\n    at Request.EventEmitter.emit (domain.js:441:20)\n    at IncomingMessage.<anonymous> (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/request/request.js:1083:12)\n    at Object.onceWrapper (events.js:277:13)\n    at IncomingMessage.emit (events.js:194:15)\n    at IncomingMessage.EventEmitter.emit (domain.js:441:20)\n    at endReadableNT (_stream_readable.js:1125:12)\n    at process._tickCallback (internal/process/next_tick.js:63:19)",
                },
                attempt: 2,
              },
              retries: [
                {
                  suiteUrl: '',
                  name: 'safariMobile',
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
                      "Could not create a session: The Safari instance is already paired with a different session.\nBuild info: version: '3.141.5', revision: 'd54ebd709a', time: '2018-11-06T11:58:47'\nSystem info: host: 'MacBook-Pro-Olga.local', ip: 'fe80:0:0:0:14f6:cc71:fc09:b45f%en0', os.name: 'Mac OS X', os.arch: 'x86_64', os.version: '10.15.4', java.version: '13.0.2'\nDriver info: driver.version: unknown\nremote stacktrace: ",
                    stack:
                      "Error: Could not create a session: The Safari instance is already paired with a different session.\nBuild info: version: '3.141.5', revision: 'd54ebd709a', time: '2018-11-06T11:58:47'\nSystem info: host: 'MacBook-Pro-Olga.local', ip: 'fe80:0:0:0:14f6:cc71:fc09:b45f%en0', os.name: 'Mac OS X', os.arch: 'x86_64', os.version: '10.15.4', java.version: '13.0.2'\nDriver info: driver.version: unknown\nremote stacktrace: \n    at new RuntimeError (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/@gemini-testing/webdriverio/build/lib/utils/ErrorHandler.js:143:12)\n    at Request._callback (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/@gemini-testing/webdriverio/build/lib/utils/RequestHandler.js:322:39)\n    at Request.self.callback (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/request/request.js:185:22)\n    at Request.emit (events.js:189:13)\n    at Request.EventEmitter.emit (domain.js:441:20)\n    at Request.<anonymous> (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/request/request.js:1161:10)\n    at Request.emit (events.js:189:13)\n    at Request.EventEmitter.emit (domain.js:441:20)\n    at IncomingMessage.<anonymous> (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/request/request.js:1083:12)\n    at Object.onceWrapper (events.js:277:13)\n    at IncomingMessage.emit (events.js:194:15)\n    at IncomingMessage.EventEmitter.emit (domain.js:441:20)\n    at endReadableNT (_stream_readable.js:1125:12)\n    at process._tickCallback (internal/process/next_tick.js:63:19)",
                  },
                  attempt: 0,
                },
                {
                  suiteUrl: '',
                  name: 'safariMobile',
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
                      "Could not create a session: The Safari instance is already paired with another WebDriver session.\nBuild info: version: '3.141.5', revision: 'd54ebd709a', time: '2018-11-06T11:58:47'\nSystem info: host: 'MacBook-Pro-Olga.local', ip: 'fe80:0:0:0:14f6:cc71:fc09:b45f%en0', os.name: 'Mac OS X', os.arch: 'x86_64', os.version: '10.15.4', java.version: '13.0.2'\nDriver info: driver.version: unknown\nremote stacktrace: ",
                    stack:
                      "Error: Could not create a session: The Safari instance is already paired with another WebDriver session.\nBuild info: version: '3.141.5', revision: 'd54ebd709a', time: '2018-11-06T11:58:47'\nSystem info: host: 'MacBook-Pro-Olga.local', ip: 'fe80:0:0:0:14f6:cc71:fc09:b45f%en0', os.name: 'Mac OS X', os.arch: 'x86_64', os.version: '10.15.4', java.version: '13.0.2'\nDriver info: driver.version: unknown\nremote stacktrace: \n    at new RuntimeError (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/@gemini-testing/webdriverio/build/lib/utils/ErrorHandler.js:143:12)\n    at Request._callback (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/@gemini-testing/webdriverio/build/lib/utils/RequestHandler.js:322:39)\n    at Request.self.callback (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/request/request.js:185:22)\n    at Request.emit (events.js:189:13)\n    at Request.EventEmitter.emit (domain.js:441:20)\n    at Request.<anonymous> (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/request/request.js:1161:10)\n    at Request.emit (events.js:189:13)\n    at Request.EventEmitter.emit (domain.js:441:20)\n    at IncomingMessage.<anonymous> (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/request/request.js:1083:12)\n    at Object.onceWrapper (events.js:277:13)\n    at IncomingMessage.emit (events.js:194:15)\n    at IncomingMessage.EventEmitter.emit (domain.js:441:20)\n    at endReadableNT (_stream_readable.js:1125:12)\n    at process._tickCallback (internal/process/next_tick.js:63:19)",
                  },
                  attempt: 1,
                },
              ],
            },
          ],
          status: 'error',
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
  date: 'Sun May 24 2020 11:23:08 GMT+0300 (Moscow Standard Time)',
  saveFormat: 'js',
};
try {
  module.exports = data;
} catch (e) {}

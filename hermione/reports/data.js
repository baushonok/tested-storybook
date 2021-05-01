var data = {
  skips: [],
  suites: [
    {
      name: 'Accordion',
      suitePath: ['Accordion'],
      children: [
        {
          name: 'Default',
          suitePath: ['Accordion', 'Default'],
          browsers: [
            {
              name: 'chrome',
              result: {
                suiteUrl:
                  '/iframe.html?selectedKind=Accordion&selectedStory=Default',
                name: 'chrome',
                metaInfo: {
                  url:
                    '/iframe.html?selectedKind=Accordion&selectedStory=Default',
                  file:
                    'src/components/accordion/__tests__/hermione/Default.hermione.js',
                  sessionId: '7f4a6cacef959e6c436691b52450c6c9',
                },
                imagesInfo: [
                  {
                    status: 'updated',
                    actualImg: {
                      path: 'images/47df4a0/Default/chrome~current_0.png',
                      size: { width: 1184, height: 21 },
                    },
                    stateName: 'Default',
                    expectedImg: {
                      path: 'images/47df4a0/Default/chrome~ref_0.png',
                      size: { width: 1184, height: 21 },
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
                suiteUrl:
                  '/iframe.html?selectedKind=Accordion&selectedStory=Default',
                name: 'chromeMobile',
                metaInfo: {
                  pid: 12071,
                  url:
                    '/iframe.html?selectedKind=Accordion&selectedStory=Default',
                  file:
                    'src/components/accordion/__tests__/hermione/Default.hermione.js',
                  sessionId: '5aeb668a381bd2a43ada343c6d802917',
                },
                imagesInfo: [
                  {
                    stateName: 'Default',
                    refImg: {
                      path:
                        '/Users/olgapasynok/Documents/code/tested-storybook/hermione/screens/47df4a0/chromeMobile/Default.png',
                      size: { width: 796, height: 42 },
                    },
                    status: 'success',
                    expectedImg: {
                      path: 'images/47df4a0/Default/chromeMobile~ref_0.png',
                      size: { width: 796, height: 42 },
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
                suiteUrl:
                  '/iframe.html?selectedKind=Accordion&selectedStory=Default',
                name: 'safariXL',
                metaInfo: {
                  url:
                    '/iframe.html?selectedKind=Accordion&selectedStory=Default',
                  file:
                    'src/components/accordion/__tests__/hermione/Default.hermione.js',
                  sessionId: '1018A638-2456-4CDF-A0FA-04C2763D3D22',
                },
                imagesInfo: [
                  {
                    status: 'updated',
                    actualImg: {
                      path: 'images/47df4a0/Default/safariXL~current_0.png',
                      size: { width: 1284, height: 22 },
                    },
                    stateName: 'Default',
                    expectedImg: {
                      path: 'images/47df4a0/Default/safariXL~ref_0.png',
                      size: { width: 1284, height: 22 },
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
                suiteUrl: '',
                name: 'safariMobile',
                metaInfo: {
                  url: '',
                  file:
                    'src/components/accordion/__tests__/hermione/Default.hermione.js',
                  sessionId: 'unknown session id',
                },
                imagesInfo: [],
                screenshot: false,
                multipleTabs: true,
                status: 'error',
                error: {
                  message:
                    "Could not create a session: The Safari instance terminated while trying to pair with it.\nBuild info: version: '3.141.5', revision: 'd54ebd709a', time: '2018-11-06T11:58:47'\nSystem info: host: 'MacBook-Pro-Olga.local', ip: 'fe80:0:0:0:1cc5:644:afe3:bb1f%en0', os.name: 'Mac OS X', os.arch: 'x86_64', os.version: '10.16', java.version: '13.0.2'\nDriver info: driver.version: unknown\nremote stacktrace: ",
                  stack:
                    "Error: Could not create a session: The Safari instance terminated while trying to pair with it.\nBuild info: version: '3.141.5', revision: 'd54ebd709a', time: '2018-11-06T11:58:47'\nSystem info: host: 'MacBook-Pro-Olga.local', ip: 'fe80:0:0:0:1cc5:644:afe3:bb1f%en0', os.name: 'Mac OS X', os.arch: 'x86_64', os.version: '10.16', java.version: '13.0.2'\nDriver info: driver.version: unknown\nremote stacktrace: \n    at new RuntimeError (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/@gemini-testing/webdriverio/build/lib/utils/ErrorHandler.js:143:12)\n    at Request._callback (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/@gemini-testing/webdriverio/build/lib/utils/RequestHandler.js:322:39)\n    at Request.self.callback (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/request/request.js:185:22)\n    at Request.emit (events.js:315:20)\n    at Request.EventEmitter.emit (domain.js:482:12)\n    at Request.<anonymous> (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/request/request.js:1161:10)\n    at Request.emit (events.js:315:20)\n    at Request.EventEmitter.emit (domain.js:482:12)\n    at IncomingMessage.<anonymous> (/Users/olgapasynok/Documents/code/tested-storybook/node_modules/request/request.js:1083:12)\n    at Object.onceWrapper (events.js:421:28)\n    at IncomingMessage.emit (events.js:327:22)\n    at IncomingMessage.EventEmitter.emit (domain.js:482:12)\n    at endReadableNT (_stream_readable.js:1221:12)\n    at processTicksAndRejections (internal/process/task_queues.js:84:21)",
                },
                attempt: 0,
              },
              retries: [],
            },
          ],
          status: 'error',
        },
        {
          name: 'No-Content',
          suitePath: ['Accordion', 'No-Content'],
          browsers: [
            {
              name: 'chrome',
              result: {
                suiteUrl:
                  '/iframe.html?selectedKind=Accordion&selectedStory=No-Content',
                name: 'chrome',
                metaInfo: {
                  url:
                    '/iframe.html?selectedKind=Accordion&selectedStory=No-Content',
                  file:
                    'src/components/accordion/__tests__/hermione/No-Content.hermione.js',
                  sessionId: '7f4a6cacef959e6c436691b52450c6c9',
                },
                imagesInfo: [
                  {
                    status: 'updated',
                    actualImg: {
                      path: 'images/315048f/No-Content/chrome~current_0.png',
                      size: { width: 1184, height: 21 },
                    },
                    stateName: 'No-Content',
                    expectedImg: {
                      path: 'images/315048f/No-Content/chrome~ref_0.png',
                      size: { width: 1184, height: 21 },
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
                suiteUrl:
                  '/iframe.html?selectedKind=Accordion&selectedStory=No-Content',
                name: 'chromeMobile',
                metaInfo: {
                  pid: 12071,
                  url:
                    '/iframe.html?selectedKind=Accordion&selectedStory=No-Content',
                  file:
                    'src/components/accordion/__tests__/hermione/No-Content.hermione.js',
                  sessionId: '5aeb668a381bd2a43ada343c6d802917',
                },
                imagesInfo: [
                  {
                    stateName: 'No-Content',
                    refImg: {
                      path:
                        '/Users/olgapasynok/Documents/code/tested-storybook/hermione/screens/315048f/chromeMobile/No-Content.png',
                      size: { width: 796, height: 42 },
                    },
                    status: 'success',
                    expectedImg: {
                      path: 'images/315048f/No-Content/chromeMobile~ref_0.png',
                      size: { width: 796, height: 42 },
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
                suiteUrl:
                  '/iframe.html?selectedKind=Accordion&selectedStory=No-Content',
                name: 'safariXL',
                metaInfo: {
                  url:
                    '/iframe.html?selectedKind=Accordion&selectedStory=No-Content',
                  file:
                    'src/components/accordion/__tests__/hermione/No-Content.hermione.js',
                  sessionId: '1018A638-2456-4CDF-A0FA-04C2763D3D22',
                },
                imagesInfo: [
                  {
                    status: 'updated',
                    actualImg: {
                      path: 'images/315048f/No-Content/safariXL~current_0.png',
                      size: { width: 1284, height: 22 },
                    },
                    stateName: 'No-Content',
                    expectedImg: {
                      path: 'images/315048f/No-Content/safariXL~ref_0.png',
                      size: { width: 1284, height: 22 },
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
                suiteUrl:
                  '/iframe.html?selectedKind=Accordion&selectedStory=No-Content',
                name: 'safariMobile',
                metaInfo: {
                  url:
                    '/iframe.html?selectedKind=Accordion&selectedStory=No-Content',
                  file:
                    'src/components/accordion/__tests__/hermione/No-Content.hermione.js',
                  sessionId: '01D4BF89-508A-4D02-BFB8-2CA0B83FDD6C',
                },
                imagesInfo: [
                  {
                    status: 'updated',
                    actualImg: {
                      path:
                        'images/315048f/No-Content/safariMobile~current_0.png',
                      size: { width: 398, height: 22 },
                    },
                    stateName: 'No-Content',
                    expectedImg: {
                      path: 'images/315048f/No-Content/safariMobile~ref_0.png',
                      size: { width: 398, height: 22 },
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
        {
          name: 'With-remove-control',
          suitePath: ['Accordion', 'With-remove-control'],
          browsers: [
            {
              name: 'chrome',
              result: {
                suiteUrl:
                  '/iframe.html?selectedKind=Accordion&selectedStory=With-remove-control',
                name: 'chrome',
                metaInfo: {
                  url:
                    '/iframe.html?selectedKind=Accordion&selectedStory=With-remove-control',
                  file:
                    'src/components/accordion/__tests__/hermione/With-remove-control.hermione.js',
                  sessionId: '7f4a6cacef959e6c436691b52450c6c9',
                },
                imagesInfo: [
                  {
                    status: 'updated',
                    actualImg: {
                      path:
                        'images/8b90613/With-remove-control/chrome~current_0.png',
                      size: { width: 1184, height: 21 },
                    },
                    stateName: 'With-remove-control',
                    expectedImg: {
                      path:
                        'images/8b90613/With-remove-control/chrome~ref_0.png',
                      size: { width: 1184, height: 21 },
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
                suiteUrl:
                  '/iframe.html?selectedKind=Accordion&selectedStory=With-remove-control',
                name: 'chromeMobile',
                metaInfo: {
                  pid: 12071,
                  url:
                    '/iframe.html?selectedKind=Accordion&selectedStory=With-remove-control',
                  file:
                    'src/components/accordion/__tests__/hermione/With-remove-control.hermione.js',
                  sessionId: '5aeb668a381bd2a43ada343c6d802917',
                },
                imagesInfo: [
                  {
                    stateName: 'With-remove-control',
                    refImg: {
                      path:
                        '/Users/olgapasynok/Documents/code/tested-storybook/hermione/screens/8b90613/chromeMobile/With-remove-control.png',
                      size: { width: 796, height: 42 },
                    },
                    status: 'success',
                    expectedImg: {
                      path:
                        'images/8b90613/With-remove-control/chromeMobile~ref_0.png',
                      size: { width: 796, height: 42 },
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
                suiteUrl:
                  '/iframe.html?selectedKind=Accordion&selectedStory=With-remove-control',
                name: 'safariXL',
                metaInfo: {
                  url:
                    '/iframe.html?selectedKind=Accordion&selectedStory=With-remove-control',
                  file:
                    'src/components/accordion/__tests__/hermione/With-remove-control.hermione.js',
                  sessionId: '1018A638-2456-4CDF-A0FA-04C2763D3D22',
                },
                imagesInfo: [
                  {
                    status: 'updated',
                    actualImg: {
                      path:
                        'images/8b90613/With-remove-control/safariXL~current_0.png',
                      size: { width: 1284, height: 22 },
                    },
                    stateName: 'With-remove-control',
                    expectedImg: {
                      path:
                        'images/8b90613/With-remove-control/safariXL~ref_0.png',
                      size: { width: 1284, height: 22 },
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
                suiteUrl:
                  '/iframe.html?selectedKind=Accordion&selectedStory=With-remove-control',
                name: 'safariMobile',
                metaInfo: {
                  url:
                    '/iframe.html?selectedKind=Accordion&selectedStory=With-remove-control',
                  file:
                    'src/components/accordion/__tests__/hermione/With-remove-control.hermione.js',
                  sessionId: '01D4BF89-508A-4D02-BFB8-2CA0B83FDD6C',
                },
                imagesInfo: [
                  {
                    status: 'updated',
                    actualImg: {
                      path:
                        'images/8b90613/With-remove-control/safariMobile~current_0.png',
                      size: { width: 398, height: 22 },
                    },
                    stateName: 'With-remove-control',
                    expectedImg: {
                      path:
                        'images/8b90613/With-remove-control/safariMobile~ref_0.png',
                      size: { width: 398, height: 22 },
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
    {
      name: 'Button',
      suitePath: ['Button'],
      children: [
        {
          name: 'Default',
          suitePath: ['Button', 'Default'],
          browsers: [
            {
              name: 'chrome',
              result: {
                suiteUrl:
                  '/iframe.html?selectedKind=Button&selectedStory=Default',
                name: 'chrome',
                metaInfo: {
                  url: '/iframe.html?selectedKind=Button&selectedStory=Default',
                  file:
                    'src/components/button/__tests__/hermione/Default.hermione.js',
                  sessionId: '7f4a6cacef959e6c436691b52450c6c9',
                },
                imagesInfo: [
                  {
                    status: 'updated',
                    actualImg: {
                      path: 'images/69a44f8/Default/chrome~current_0.png',
                      size: { width: 1184, height: 33 },
                    },
                    stateName: 'Default',
                    expectedImg: {
                      path: 'images/69a44f8/Default/chrome~ref_0.png',
                      size: { width: 1184, height: 33 },
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
                suiteUrl:
                  '/iframe.html?selectedKind=Button&selectedStory=Default',
                name: 'chromeMobile',
                metaInfo: {
                  url: '/iframe.html?selectedKind=Button&selectedStory=Default',
                  file:
                    'src/components/button/__tests__/hermione/Default.hermione.js',
                  sessionId: '5aeb668a381bd2a43ada343c6d802917',
                },
                imagesInfo: [
                  {
                    status: 'updated',
                    actualImg: {
                      path: 'images/69a44f8/Default/chromeMobile~current_0.png',
                      size: { width: 796, height: 56 },
                    },
                    stateName: 'Default',
                    expectedImg: {
                      path: 'images/69a44f8/Default/chromeMobile~ref_0.png',
                      size: { width: 796, height: 56 },
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
                suiteUrl:
                  '/iframe.html?selectedKind=Button&selectedStory=Default',
                name: 'safariXL',
                metaInfo: {
                  url: '/iframe.html?selectedKind=Button&selectedStory=Default',
                  file:
                    'src/components/button/__tests__/hermione/Default.hermione.js',
                  sessionId: '1018A638-2456-4CDF-A0FA-04C2763D3D22',
                },
                imagesInfo: [
                  {
                    status: 'updated',
                    actualImg: {
                      path: 'images/69a44f8/Default/safariXL~current_0.png',
                      size: { width: 1284, height: 37 },
                    },
                    stateName: 'Default',
                    expectedImg: {
                      path: 'images/69a44f8/Default/safariXL~ref_0.png',
                      size: { width: 1284, height: 37 },
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
                suiteUrl:
                  '/iframe.html?selectedKind=Button&selectedStory=Default',
                name: 'safariMobile',
                metaInfo: {
                  url: '/iframe.html?selectedKind=Button&selectedStory=Default',
                  file:
                    'src/components/button/__tests__/hermione/Default.hermione.js',
                  sessionId: '01D4BF89-508A-4D02-BFB8-2CA0B83FDD6C',
                },
                imagesInfo: [
                  {
                    status: 'updated',
                    actualImg: {
                      path: 'images/69a44f8/Default/safariMobile~current_0.png',
                      size: { width: 398, height: 35 },
                    },
                    stateName: 'Default',
                    expectedImg: {
                      path: 'images/69a44f8/Default/safariMobile~ref_0.png',
                      size: { width: 398, height: 35 },
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
      status: 'success',
    },
    {
      name: 'TabsList',
      suitePath: ['TabsList'],
      children: [
        {
          name: 'Default',
          suitePath: ['TabsList', 'Default'],
          browsers: [
            {
              name: 'chrome',
              result: {
                suiteUrl:
                  '/iframe.html?selectedKind=TabsList&selectedStory=Default',
                name: 'chrome',
                metaInfo: {
                  url:
                    '/iframe.html?selectedKind=TabsList&selectedStory=Default',
                  file:
                    'src/components/tabs-list/__tests__/hermione/Default.hermione.js',
                  sessionId: '7f4a6cacef959e6c436691b52450c6c9',
                },
                imagesInfo: [
                  {
                    status: 'updated',
                    actualImg: {
                      path: 'images/d75ba2b/Default/chrome~current_0.png',
                      size: { width: 1184, height: 59 },
                    },
                    stateName: 'Default',
                    expectedImg: {
                      path: 'images/d75ba2b/Default/chrome~ref_0.png',
                      size: { width: 1184, height: 59 },
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
                suiteUrl:
                  '/iframe.html?selectedKind=TabsList&selectedStory=Default',
                name: 'chromeMobile',
                metaInfo: {
                  pid: 12071,
                  url:
                    '/iframe.html?selectedKind=TabsList&selectedStory=Default',
                  file:
                    'src/components/tabs-list/__tests__/hermione/Default.hermione.js',
                  sessionId: '5aeb668a381bd2a43ada343c6d802917',
                },
                imagesInfo: [
                  {
                    stateName: 'Default',
                    refImg: {
                      path:
                        '/Users/olgapasynok/Documents/code/tested-storybook/hermione/screens/d75ba2b/chromeMobile/Default.png',
                      size: { width: 796, height: 118 },
                    },
                    status: 'success',
                    expectedImg: {
                      path: 'images/d75ba2b/Default/chromeMobile~ref_0.png',
                      size: { width: 796, height: 118 },
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
                suiteUrl:
                  '/iframe.html?selectedKind=TabsList&selectedStory=Default',
                name: 'safariXL',
                metaInfo: {
                  url:
                    '/iframe.html?selectedKind=TabsList&selectedStory=Default',
                  file:
                    'src/components/tabs-list/__tests__/hermione/Default.hermione.js',
                  sessionId: '1018A638-2456-4CDF-A0FA-04C2763D3D22',
                },
                imagesInfo: [
                  {
                    status: 'updated',
                    actualImg: {
                      path: 'images/d75ba2b/Default/safariXL~current_0.png',
                      size: { width: 1284, height: 59 },
                    },
                    stateName: 'Default',
                    expectedImg: {
                      path: 'images/d75ba2b/Default/safariXL~ref_0.png',
                      size: { width: 1284, height: 59 },
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
                suiteUrl:
                  '/iframe.html?selectedKind=TabsList&selectedStory=Default',
                name: 'safariMobile',
                metaInfo: {
                  url:
                    '/iframe.html?selectedKind=TabsList&selectedStory=Default',
                  file:
                    'src/components/tabs-list/__tests__/hermione/Default.hermione.js',
                  sessionId: '01D4BF89-508A-4D02-BFB8-2CA0B83FDD6C',
                },
                imagesInfo: [
                  {
                    status: 'updated',
                    actualImg: {
                      path: 'images/d75ba2b/Default/safariMobile~current_0.png',
                      size: { width: 398, height: 59 },
                    },
                    stateName: 'Default',
                    expectedImg: {
                      path: 'images/d75ba2b/Default/safariMobile~ref_0.png',
                      size: { width: 398, height: 59 },
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
      status: 'success',
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
  date: 'Sat May 01 2021 17:22:20 GMT+0300 (Moscow Standard Time)',
  saveFormat: 'js',
  browsers: [
    { id: 'chrome' },
    { id: 'chromeMobile' },
    { id: 'safariXL' },
    { id: 'safariMobile' },
  ],
};
try {
  module.exports = data;
} catch (e) {}

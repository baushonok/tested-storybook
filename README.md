[![Travis][build-badge]][build]
[![Coveralls][coveralls-badge]][coveralls]

[build-badge]: https://img.shields.io/travis/baushonok/tested-storybook/master.png?style=flat-square
[build]: https://travis-ci.org/baushonok/tested-storybook
[coveralls-badge]: https://img.shields.io/coveralls/baushonok/tested-storybook/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/baushonok/tested-storybook

# Tested Storybook

App created for testing [storytests-webpack-plugin](https://www.npmjs.com/package/storytests-webpack-plugin), but also used for experiments with Hermione, Jest, CI and other technologies.  
Currently here are unit tests (Jest) and simple screenshot tests (Hermione) for each component. As well here are simple e2e tests for the whole app (Hermione).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:12345](http://localhost:12345) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm storybook`

Launch Storybook.  
Open [http://localhost:12345](http://localhost:12345) to view it in the browser.

### `npm test`

Launch linting (ESLint, styleling) and testing (Jest).  
This script is also running on CI.

### `npm create-tests`

Launch [storytests-webpack-plugin](https://www.npmjs.com/package/storytests-webpack-plugin) created simple screenshot tests for components according to their stories for Storybook. These tests will be placed to 'src/components/_component-name_/\_\_tests\__/hermione/\_story-name_.hermione.js'. If test already exists it will not be rewritten.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

import { addDecorator, configure } from '@storybook/react';
import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

const StoryContainer = ({ children }) => (
  <Fragment>
    <Helmet>
      <meta charSet="utf-8" />
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <div className="story-container">{children}</div>
  </Fragment>
);

addDecorator((storyFn) => <StoryContainer>{storyFn()}</StoryContainer>);

configure(require.context('../src/components', true, /\.stories\.js$/), module);

import React from 'react';
import renderer from 'react-test-renderer';

import TabContent from '../..';

describe('TabContent', () => {
  describe('should match snapshot', () => {
    const content = 'some content';

    test('when active', () => {
      const tree = renderer
        .create(<TabContent data={content} isActive />)
        .toJSON();

      expect(tree).toMatchSnapshot();
    });

    test('when inactive', () => {
      const tree = renderer.create(<TabContent data={content} />).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});

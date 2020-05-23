import { render, RenderResult } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';

import TabsList from '../..';
import { data } from '../../__mocks__/data';
import { getSectionByIndex, getToggleByIndex } from './helpers';

describe('TabsList', () => {
  describe('shapshots', () => {
    test('should match when empty', () => {
      const tree = renderer.create(<TabsList data={[]} />).toJSON();

      expect(tree).toMatchSnapshot();
    });

    test('should match with data', () => {
      const tree = renderer.create(<TabsList data={data} />).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('behaviour', () => {
    let renderedComponent: RenderResult;

    beforeEach(() => {
      renderedComponent = render(<TabsList data={data} />);
    });

    test('first tab is active by default', () => {
      const firstToggle = getToggleByIndex(renderedComponent, 0);
      const firstSection = getSectionByIndex(renderedComponent, 0);

      expect(firstToggle).toHaveClass('tab-toggle_active');
      expect(firstSection).toBeVisible();
    });

    test('second tab is not active by default', () => {
      const secondToggle = getToggleByIndex(renderedComponent, 1);
      const secondSection = getSectionByIndex(renderedComponent, 1);

      expect(secondToggle).not.toHaveClass('tab-toggle_active');
      expect(secondSection).not.toBeVisible();
    });

    test('second tab is active after clicking', () => {
      const firstToggle = getToggleByIndex(renderedComponent, 0);
      const firstSection = getSectionByIndex(renderedComponent, 0);
      const secondToggle = getToggleByIndex(renderedComponent, 1);
      const secondSection = getSectionByIndex(renderedComponent, 1);

      secondToggle.click();

      expect(firstToggle).not.toHaveClass('tab-toggle_active');
      expect(firstSection).not.toBeVisible();
      expect(secondToggle).toHaveClass('tab-toggle_active');
      expect(secondSection).toBeVisible();
    });
  });
});

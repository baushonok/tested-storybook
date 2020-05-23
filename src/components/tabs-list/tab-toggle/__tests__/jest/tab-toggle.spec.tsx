import { render, screen } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';

import TabToggle from '../..';

describe('TabToggle', () => {
  const name = 'tab name';
  const index = 0;
  const clickHandler = jest.fn();

  describe('should match snapshot', () => {
    test('when active', () => {
      const tree = renderer
        .create(
          <TabToggle
            name={name}
            index={index}
            onClick={clickHandler}
            isActive
          />
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });

    test('when inactive', () => {
      const tree = renderer
        .create(<TabToggle name={name} index={index} onClick={clickHandler} />)
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('behaviour', () => {
    test('should invoke click when tab is inactive', () => {
      render(<TabToggle name={name} index={index} onClick={clickHandler} />);
      const tabToggle = screen.getByTestId(`tab-toggle-${index}`);

      tabToggle.click();

      expect(clickHandler).toHaveBeenCalledTimes(1);
    });

    test('should not invoke click when tab is active', () => {
      render(
        <TabToggle name={name} index={index} onClick={clickHandler} isActive />
      );
      const tabToggle = screen.getByTestId(`tab-toggle-${index}`);

      tabToggle.click();

      expect(clickHandler).not.toHaveBeenCalled();
    });
  });
});

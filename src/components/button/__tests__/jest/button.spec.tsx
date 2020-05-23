import { render, screen } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';

import { getButton } from './helpers';
import Button from '../..';

describe('Button', () => {
  describe('shapshots', () => {
    test('should match when empty', () => {
      const tree = renderer.create(<Button />).toJSON();

      expect(tree).toMatchSnapshot();
    });

    test('should match with text', () => {
      const tree = renderer.create(<Button>Click me!</Button>).toJSON();

      expect(tree).toMatchSnapshot();
    });

    test('should match with className', () => {
      const tree = renderer
        .create(<Button className="jest">Click me!</Button>)
        .toJSON();

      expect(tree).toMatchSnapshot();
    });

    test('should match when disabled', () => {
      const tree = renderer
        .create(<Button disabled>Click me!</Button>)
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('behaviour', () => {
    const buttonText = 'Click me!';
    const clickHandler = jest.fn();

    test('should invoke onClick', () => {
      render(<Button onClick={clickHandler}>{buttonText}</Button>);
      const button = getButton(screen);

      button.click();

      expect(clickHandler).toHaveBeenCalledTimes(1);
    });

    test('should not invoke onClick when disabled', () => {
      render(
        <Button disabled onClick={clickHandler}>
          {buttonText}
        </Button>
      );
      const button = getButton(screen);

      button.click();

      expect(clickHandler).not.toHaveBeenCalled();
    });

    test('should not invoke onClick when not function', () => {
      const fakeClickHandler = undefined;
      render(<Button onClick={fakeClickHandler}>{buttonText}</Button>);
      const button = screen.getByText(buttonText);

      button.click();

      expect(clickHandler).not.toHaveBeenCalled();
    });
  });
});

import { render, RenderResult } from "@testing-library/react";
import React from "react";
import renderer from "react-test-renderer";

import Button from "../../";

describe("Button", () => {
  describe("shapshots", () => {
    test("should match when empty", () => {
      const tree = renderer.create(<Button />).toJSON();

      expect(tree).toMatchSnapshot();
    });

    test("should match with text", () => {
      const tree = renderer.create(<Button>Click me!</Button>).toJSON();

      expect(tree).toMatchSnapshot();
    });

    test("should match with className", () => {
      const tree = renderer
        .create(<Button className="jest">Click me!</Button>)
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});

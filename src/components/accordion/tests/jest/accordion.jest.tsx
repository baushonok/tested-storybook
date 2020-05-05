import { render, RenderResult } from "@testing-library/react";
import React from "react";
import renderer from "react-test-renderer";

import Accordion from "../..";
import { getContent, getToggle } from "./helpers";

describe("Accordion", () => {
  describe("shapshots", () => {
    test("should match when empty", () => {
      const tree = renderer.create(<Accordion />).toJSON();

      expect(tree).toMatchSnapshot();
    });

    test("should match with content", () => {
      const tree = renderer
        .create(<Accordion>Some content</Accordion>)
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe("behaviour", () => {
    let renderedComponent: RenderResult;
    let toggle: HTMLElement;

    beforeEach(() => {
      renderedComponent = render(<Accordion />);
      toggle = getToggle(renderedComponent)!;
    });

    test("should be collapsed by default", () => {
      const content = getContent(renderedComponent);

      expect(content).not.toBeInTheDocument();
    });

    test("should be expanded after clicking toggle", () => {
      toggle.click();

      const content = getContent(renderedComponent);

      expect(content).toBeInTheDocument();
    });

    test("should be collapsed by double after clicking toggle", () => {
      toggle.click();
      toggle.click();

      const content = getContent(renderedComponent);

      expect(content).not.toBeInTheDocument();
    });
  });
});

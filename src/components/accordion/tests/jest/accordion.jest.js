import React from "react";
import renderer from "react-test-renderer";

import Accordion from "../..";

test("Accordion should exist", () => {
  const component = renderer.create(<Accordion />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

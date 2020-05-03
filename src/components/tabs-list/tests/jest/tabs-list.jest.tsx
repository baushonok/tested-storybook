import React from "react";
import renderer from "react-test-renderer";

import TabsList from "../..";
import { data } from "../../__stories__/mocks";

test("TabsList should exist", () => {
  const component = renderer.create(<TabsList data={data} />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

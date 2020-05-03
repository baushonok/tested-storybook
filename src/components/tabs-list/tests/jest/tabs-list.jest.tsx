import { render } from "@testing-library/react";
import React from "react";
import renderer from "react-test-renderer";

import TabsList from "../..";
import { data } from "../../__stories__/mocks";

describe("TabsList", () => {
  test("should exist", () => {
    const component = renderer.create(<TabsList data={data} />);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("first toggle active by default", () => {
    const { getByTestId } = render(<TabsList data={data} />);

    const toggleList = getByTestId("tab-toggle-list");
    const firstToggle = toggleList.getElementsByClassName("tab-toggle")[0];

    expect(firstToggle).toHaveClass("tab-toggle_active");
  });

  test("first section is visible by default", () => {
    const { getByTestId } = render(<TabsList data={data} />);

    const sectionList = getByTestId("tab-content-list");
    const firstSection = sectionList.getElementsByClassName("tab-content")[0];

    expect(firstSection).toBeVisible();
  });
});

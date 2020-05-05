import { storiesOf } from "@storybook/react";
import React from "react";

import Accordion from "../index";
import { data } from "../__mocks__/data";

storiesOf("Accordion", module)
  .add("Default", () => (
    <div className="story-container">
      <Accordion>{data}</Accordion>
    </div>
  ))
  .add("No Content", () => (
    <div className="story-container">
      <Accordion></Accordion>
    </div>
  ));

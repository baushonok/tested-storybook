import { storiesOf } from "@storybook/react";
import React from "react";

import Accordion from "../index";

storiesOf("Accordion", module)
  .add("Default", () => (
    <div className="story-container">
      <Accordion>Hello Button</Accordion>
    </div>
  ))
  .add("NoContent", () => (
    <div className="story-container">
      <Accordion></Accordion>
    </div>
  ));

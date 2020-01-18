import { storiesOf } from "@storybook/react";
import React from "react";

import Accordion from "../index";

storiesOf("Accordion", module)
  .add("Default", () => <Accordion>Hello Button</Accordion>)
  .add("NoContent", () => <Accordion></Accordion>);

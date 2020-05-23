import { storiesOf } from "@storybook/react";
import React from "react";

import Button from "../button";

storiesOf("Button", module).add("Default", () => (
  <div className="story-container">
    <Button>Click me!</Button>
  </div>
));

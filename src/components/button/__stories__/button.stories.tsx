import { storiesOf } from "@storybook/react";
import React from "react";

import Button from "../button";

storiesOf("Button", module).add("Default", () => (
  <div className="story-container">
    <link
      href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap"
      rel="stylesheet"
    />
    <Button>Click me!</Button>
  </div>
));

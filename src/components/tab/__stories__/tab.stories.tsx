import { storiesOf } from "@storybook/react";
import React from "react";

import Tab from "../index";

storiesOf("Tab", module)
  .add("Default", () => (
    <div className="story-container">
      <Tab name="First" content={<h1>content title</h1>} />
    </div>
  ))
  .add("Initially open", () => (
    <div className="story-container">
      <Tab name="Tab name" content={<h1>content title</h1>} isOpen={true} />
    </div>
  ))
  .add("Several tabs", () => (
    <div className="story-container">
      <Tab name="First" content={<h1>first content title</h1>} isOpen={true} />
      <Tab name="Second" content={<h1>second content title</h1>} />
      <Tab name="Third" content={<h1>third content title</h1>} />
    </div>
  ));

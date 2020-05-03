import { storiesOf } from "@storybook/react";
import React from "react";

import TabsList from "../index";
import { data } from "./mocks";

storiesOf("TabsList", module).add("Default", () => (
  <div className="story-container">
    <TabsList data={data} />
  </div>
));

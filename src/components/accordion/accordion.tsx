import React, { useState, Fragment, FC } from "react";

import { IProps } from "./types";

const Accordion: FC<IProps> = ({ children }) => {
  const [showContent, setShowContent] = useState(false);
  const toggleVisibility = () => setShowContent(!showContent);

  return (
    <Fragment>
      <button
        type="button"
        onClick={toggleVisibility}
        data-testid="accordion-toggle"
      >
        Click me
      </button>
      {showContent && <div data-testid="accordion-content" id="content">{children}</div>}
    </Fragment>
  );
};

export default Accordion;

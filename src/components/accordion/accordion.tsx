import React, { useState, Fragment, FC } from "react";

import { IProps } from "./types";

const Accordion: FC<IProps> = ({ children }) => {
  const [showContent, setShowContent] = useState(false);
  const toggleVisibility = () => setShowContent(!showContent);

  return (
    <Fragment>
      <button type="button" onClick={toggleVisibility}>
        Click me
      </button>
      {showContent && children}
    </Fragment>
  );
};

export default Accordion;

import React, { useState, FC } from "react";

import { ITab } from "./types";

import "./tab.css";

const Tab: FC<ITab> = ({ name, content, isOpen = false }) => {
  const [showContent, setShowContent] = useState(isOpen);
  const onClick = () => setShowContent(!showContent);

  return (
    <section className="tab">
      <button
        className={`tab__toggle ${showContent ? "tab__toggle_active" : ""}`}
        type="button"
        onClick={onClick}
      >
        {name}
      </button>
      <section
        className={`tab__content ${showContent ? "" : "tab__content_hidden"}`}
      >
        {content}
      </section>
    </section>
  );
};

export default Tab;

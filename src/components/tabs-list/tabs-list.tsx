import React, { useState, useCallback, FC } from "react";

import { ITabsList } from "./types";

import "./tabs-list.css";

const TabsList: FC<ITabsList> = ({ data = [] }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const isActiveTab = (tabIndex: number) => tabIndex === activeTabIndex;

  return (
    <section className="tabs-list">
      <ul className="tabs-list__headers">
        {data.map(({ name }, index) => {
          const handleClick = () => setActiveTabIndex(index);

          return (
            <button
              className={`tab__toggle ${
                isActiveTab(index) ? "tab__toggle_active" : ""
              }`}
              type="button"
              onClick={handleClick}
            >
              {name}
            </button>
          );
        })}
      </ul>
      <ul className="tabs-list__content">
        {data.map(({ content }, index) => (
          <section
            className={`tab__content ${
              isActiveTab(index) ? "" : "tab__content_hidden"
            }`}
          >
            {content}
          </section>
        ))}
      </ul>
    </section>
  );
};

export default TabsList;

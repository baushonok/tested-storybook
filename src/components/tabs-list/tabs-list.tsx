import React, { memo, useState, FC } from "react";

import TabContent from "./tab-content";
import TabToggle from "./tab-toggle";
import { ITabsList } from "./types";

const TabsList: FC<ITabsList> = memo(({ data = [] }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const isActiveTab = (tabIndex: number) => tabIndex === activeTabIndex;

  return (
    <section className="tabs-list">
      <ul className="tabs-list__headers">
        {data.map(({ name }, index) => (
          <TabToggle
            name={name}
            index={index}
            isActive={isActiveTab(index)}
            onClick={setActiveTabIndex}
          />
        ))}
      </ul>
      <ul className="tabs-list__content">
        {data.map(({ content }, index) => (
          <TabContent data={content} isActive={isActiveTab(index)} />
        ))}
      </ul>
    </section>
  );
});

export default TabsList;

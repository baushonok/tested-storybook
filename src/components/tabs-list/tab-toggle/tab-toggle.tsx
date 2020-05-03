import React, { memo, useCallback, FC } from "react";

import { ITabName } from "./types";
import "./tab-toggle.css";

const TabToggle: FC<ITabName> = memo(
  ({ name, index, isActive = false, onClick }) => {
    const handleClick = useCallback(() => onClick(index), [index]);

    return (
      <button
        className={`tab-toggle ${isActive ? "tab-toggle_active" : ""}`}
        type="button"
        onClick={handleClick}
      >
        {name}
      </button>
    );
  }
);

export default TabToggle;

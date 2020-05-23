import React, { useCallback, FC } from 'react';

import { ITabName } from './types';
import './tab-toggle.css';

const TabToggle: FC<ITabName> = ({
  name,
  index,
  isActive = false,
  onClick,
}) => {
  const handleClick = useCallback(() => {
    if (isActive) {
      return;
    }
    onClick(index);
  }, [index, isActive, onClick]);

  return (
    <button
      className={`tab-toggle ${isActive ? 'tab-toggle_active' : ''}`}
      data-testid={`tab-toggle-${index}`}
      type="button"
      onClick={handleClick}
    >
      {name}
    </button>
  );
};

export default TabToggle;

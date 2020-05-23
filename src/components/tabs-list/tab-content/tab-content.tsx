import React, { FC } from 'react';

import { ITabContent } from './types';

import './tab-content.css';

const TabContent: FC<ITabContent> = ({ data, isActive = false }) => (
  <section className={`tab-content ${isActive ? '' : 'tab-content_hidden'}`}>
    {data}
  </section>
);

export default TabContent;

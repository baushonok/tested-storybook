import React from 'react';

import Accordion from '../components/accordion';
import { ITab } from '../components/tabs-list/types';

export const data: ITab[] = [
  {
    name: 'Common settings',
    content: <Accordion>Common settings content</Accordion>,
  },
  {
    name: 'Other settings',
    content: 'Other settings content',
  },
];

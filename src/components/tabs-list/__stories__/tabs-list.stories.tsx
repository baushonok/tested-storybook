import { storiesOf } from '@storybook/react';
import React from 'react';

import TabsList from '../index';
import { data } from '../__mocks__/data';

storiesOf('TabsList', module).add('Default', () => <TabsList data={data} />);

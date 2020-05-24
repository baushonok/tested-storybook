import { storiesOf } from '@storybook/react';
import React from 'react';

import Button from '../button';

import '../../../common/styles.css';

storiesOf('Button', module).add('Default', () => <Button>Click me!</Button>);

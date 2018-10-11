import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { Input, Form } from '../../src/components';

const stories = storiesOf(Input.displayName, module);

stories.addWithAddons(Input, () => <Input placeholder="Search..." />);

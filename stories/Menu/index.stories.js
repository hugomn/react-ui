import React, { Component } from 'react';
import { Menu, Dropdown } from '../../src/components';
import { storiesOf } from '@storybook/react';

const stories = storiesOf(Menu.displayName, module);

stories.addWithAddons(Menu, () => (
  <Menu>
    <Menu.Item name="home" />
    <Menu.Item name="messages" />
    <Menu.Item name="friends" />
  </Menu>
));

import React, { Component, Fragment } from 'react';
import { Sidebar, Dropdown, Menu } from '../../src/components';
import { Segment, Icon, Header } from '@infinitecsolutions/semantic-ui-react';
import { storiesOf } from '@storybook/react';

const stories = storiesOf(Sidebar.displayName, module);
stories.addWithAddons(
  Sidebar,
  () => (
    <Sidebar as={Menu} animation="overlay" icon="labeled" inverted vertical visible width="thin">
      <Menu.Item as="a">
        <Icon name="home" />
        Home
      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="gamepad" />
        Games
      </Menu.Item>
      <Menu.Item as="a">Channels</Menu.Item>
    </Sidebar>
  ),
  {
    infoProps: {
      propTablesExclude: [Menu.Item, Icon],
    },
  }
);

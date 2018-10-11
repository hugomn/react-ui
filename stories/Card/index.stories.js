import React from 'react';
import { storiesOf } from '@storybook/react';
import { Card } from '../../src/components';
import { Icon } from '@infinitecsolutions/semantic-ui-react';

const stories = storiesOf(Card.displayName, module);

stories.addWithAddons(
  Card,
  () => {
    return (
      <Card>
        <Card.Content header="YTD CASH IN" />
        <Card.Content description="99,00" />
      </Card>
    );
  },
  {
    infoProps: {
      propTablesExclude: [Card.Content, Icon]
    }
  }
);

import React from 'react';
import { storiesOf } from '@storybook/react';
import { Accordion } from '../../src/components';
import { Icon } from '@infinitecsolutions/semantic-ui-react';

const stories = storiesOf(Accordion.displayName, module);

stories.addWithAddons(
  Accordion,
  () => {
    return  (
      <Accordion>
        <Accordion.Title active>
          <Icon name='dropdown' />
          What is a dog?
        </Accordion.Title>
        <Accordion.Content active>
          <p>
            A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can
            be found as a welcome guest in many households across the world.
          </p>
        </Accordion.Content>
        <Accordion.Title active={false}>
          <Icon name='dropdown' />
          How do you acquire a dog?
        </Accordion.Title>
        <Accordion.Content active={false}>
          <p>
            There are many breeds of dogs. Each breed varies in size and temperament. Owners often
            select a breed of dog that they find to be compatible with their own lifestyle and
            desires from a companion.
          </p>
        </Accordion.Content>
      </Accordion>
    );
  },
  {
    infoProps: {
      propTablesExclude: [Accordion.Title, Accordion.Content, Icon],
    },
  }
);

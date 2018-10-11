import React from "react";
import { storiesOf } from "@storybook/react";
import { Button, Modal } from "../../src/components";
import { Header } from "@infinitecsolutions/semantic-ui-react";

const stories = storiesOf(Modal.displayName, module);

stories.addWithAddons(
  Modal,
  () => (
    <Modal
      dimmer={"inverted"}
      trigger={<Button>Show Modal</Button>}
      centered={false}
    >
      <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <Header>Default Profile Image</Header>
          <p>
            We've found the following gravatar image associated with your e-mail
            address.
          </p>
          <p>Is it okay to use this photo?</p>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  ),
  {
    infoProps: {
      propTablesExclude: [
        Modal.Content,
        Modal.Header,
        Modal.Description,
        Header
      ]
    }
  }
);

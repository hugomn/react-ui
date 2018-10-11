import React from "react";
import { storiesOf } from "@storybook/react";
import { Container } from "../../src/components";

const stories = storiesOf(Container.displayName, module);

stories.addWithAddons(Container, () => {
  return (
    <Container padded>Pellentesque habitant morbi tristique senectus</Container>
  );
});

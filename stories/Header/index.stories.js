import React from "react";
import { storiesOf } from "@storybook/react";
import { Header } from "../../src/components";

const stories = storiesOf(Header.displayName, module);

stories.addWithAddons(Header, () => {
  return <Header as="h1">First Header</Header>;
});

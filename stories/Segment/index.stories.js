import React from "react";
import { storiesOf } from "@storybook/react";
import { Segment } from "../../src/components";

const stories = storiesOf(Segment.displayName, module);

stories.addWithAddons(Segment, () => {
  return <Segment>Pellentesque habitant morbi tristique senectus</Segment>;
});

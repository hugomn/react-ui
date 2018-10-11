import React from "react";
import { storiesOf } from "@storybook/react";
import { Responsive } from "../../src/components";

const stories = storiesOf(Responsive.displayName, module);

stories.addWithAddons(Responsive, () => {
  return (
    <Responsive as="div" {...Responsive.onlyComputer}>
      Only Computer
    </Responsive>
  );
});

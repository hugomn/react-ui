import React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "../../src/components";

const stories = storiesOf(Button.displayName, module);

stories.addWithAddons(Button, () => {
  return <Button primary content={"Simple Button"} />;
});

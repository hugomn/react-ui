import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { Popup } from "../../src/components";

const stories = storiesOf(Popup.displayName, module);

stories.addWithAddons(Popup, () => (
  <Popup
    trigger={<button>What's cooking?</button>}
    on="hover"
    content="Pasta with pizza sauce"
  />
));

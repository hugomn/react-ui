import React from "react";
import Welcome from "./Welcome";
import { storiesOf } from "@storybook/react";
import { linkTo } from "@storybook/addon-links";

storiesOf("Welcome", module).addWithAddons(
  Welcome,
  () => (
    <div style={{ padding: "20px 35px" }}>
      <Welcome showApp={linkTo("Semantic-UI/Button")} />
    </div>
  ),
  {
    description: "to Infinitec UI styleguide!",
    addInfo: false,
    addTests: false,
    addReadme: false
  }
);

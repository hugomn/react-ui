import React from "react";
import { storiesOf } from "@storybook/react";
import Header from "./header.js";

const stories = storiesOf("Test", module);

stories.add("Test Hugo", () => {
  return <Header />;
});

import React from "react";
import { storiesOf } from "@storybook/react";
import { Dropdown } from "../../src/components";

const options = [
  { key: "javascript", text: "Javascript", value: "javascript" },
  { key: "react", text: "React", value: "react" },
  { key: "html", text: "HTML", value: "html" },
  { key: "css", text: "CSS", value: "css" },
  { key: "ui", text: "UI Design", value: "ui" },
  { key: "node", text: "NodeJS", value: "node" },
  { key: "ux", text: "User Experience", value: "ux" }
];
const stories = storiesOf(Dropdown.displayName, module);

stories.addWithAddons(Dropdown, () => (
  <Dropdown placeholder="Skills" options={options} />
));

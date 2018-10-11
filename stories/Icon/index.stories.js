import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { Icon } from "../../src/components";

const stories = storiesOf(Icon.displayName, module);

stories.addWithAddons(Icon, () => <Icon name="home" size="huge" />);

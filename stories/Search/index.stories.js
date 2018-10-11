import React from "react";
import { storiesOf } from "@storybook/react";
import { Search } from "../../src/components";

const stories = storiesOf(Search.displayName, module);

stories.addWithAddons(Search, () => <Search />);

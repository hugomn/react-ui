import { configure, addDecorator, setAddon } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs } from '@storybook/addon-knobs'
import { withSmartKnobs } from "storybook-addon-smart-knobs";
import { setOptions } from "@storybook/addon-options";
import { setDefaults } from "@storybook/addon-info";
import PropTypesTable from "./proptypes.table";
import withTests from "storybook-addon-jest";
import React from "react";
import "../src/semantic/index.js";
import "./styles.css";

// automatically import all files ending in *.stories.js
const req = require.context("../stories", true, /.stories.js$/);
function loadStories() {
  require("../stories/index.stories.js");
  req.keys().forEach(filename => req(filename));
}

setAddon({
  addWithAddons(component, storyFn, opts) {
    const options = {
      addInfo: true,
      addReadme: true,
      addTests: true,
      description: `Default ${component.displayName}`,
      name: component.displayName,
      infoProps: {},
      ...opts
    };
    this.add(options.description, context => {
      let storyResult = storyFn();

      // Add info addon
      if (options.addInfo) {
        storyResult = withInfo({
          TableComponent: PropTypesTable,
          text: options.addReadme && (
            <div
              className="storySummary"
              dangerouslySetInnerHTML={{
                __html: require(`../stories/${options.name}/README.md`)
              }}
            />
          ),
          header: true,
          ...options.infoProps
        })(() => storyResult, context);
      }

      // Add tests addon
      try {
        const jestTestResults = require("../.jest-test-results.json");
        if (options.addTests) {
          storyResult = withTests(jestTestResults, {
            filesExt: ".test.js"
          })(options.name)(() => storyResult, context);
        }
      } catch (e) {
        console.warn("Jest results file not found. Please run your tests.");
      }

      return storyResult;
    });
  }
});

// addDecorator(withReadme(README));
addDecorator(withSmartKnobs);
addDecorator(withKnobs);

setDefaults({
  inline: true,
  maxPropsIntoLine: 1,
  maxPropObjectKeys: 10,
  maxPropArrayLength: 10,
  maxPropStringLength: 100
});

setOptions({
  name: "Infinitec Solutions UI",
  url: "https://github.com/infinitecsolutions/ui",
  showStoriesPanel: true,
  showAddonPanel: true,
  addonPanelInRight: true,
  sidebarAnimations: true
});

configure(loadStories, module);

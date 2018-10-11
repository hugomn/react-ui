import React from "react";
import { storiesOf } from "@storybook/react";
import { Grid, Segment } from "../../src/components";

const stories = storiesOf(Grid.displayName, module);

stories.addWithAddons(
  Grid,
  () => {
    return (
      <Grid columns="equal">
        <Grid.Column>
          <Segment>1</Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>2</Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>3</Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>4</Segment>
        </Grid.Column>
      </Grid>
    );
  },
  { infoProps: { propTablesExclude: [Grid.Column, Segment] } }
);

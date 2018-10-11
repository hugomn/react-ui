import React from "react";
import PropTypes from "prop-types";
import {
  Grid as SUIRGrid,
  GridColumn,
  GridRow
} from "@infinitecsolutions/semantic-ui-react";

const Grid = props => {
  return <SUIRGrid {...props} />;
};

Grid.propTypes = {
  // /** A grid can have rows divided into cells. */
  celled: PropTypes.bool,

  /** A grid can have its columns centered. */
  centered: PropTypes.bool,

  /** Represents column count per row in Grid. */
  columns: PropTypes.oneOf([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    "equal"
  ]),

  /** A grid can be combined with a container to use the available layout and alignment. */
  container: PropTypes.bool,

  /** A grid can have dividers between its columns. */
  divided: PropTypes.bool,

  /** A grid can double its column width on tablet and mobile sizes. */
  doubling: PropTypes.bool,

  /** A grid's colors can be inverted. */
  inverted: PropTypes.bool,

  /** A grid can preserve its vertical and horizontal gutters on first and last columns. */
  padded: PropTypes.bool,

  /** A grid can increase its gutters to allow for more negative space. */
  relaxed: PropTypes.bool,

  /** A grid can specify that its columns should reverse order at different device sizes. */
  reversed: PropTypes.oneOf([
    "computer",
    "computer vertically",
    "mobile",
    "mobile vertically",
    "tablet",
    "tablet vertically"
  ]),

  /** A grid can have its columns stack on-top of each other after reaching mobile breakpoints. */
  stackable: PropTypes.bool,

  /** A grid can stretch its contents to take up the entire grid height. */
  stretched: PropTypes.bool,

  /** A grid can specify its text alignment. */
  textAlign: PropTypes.oneOf(["left", "center", "right", "justified"]),

  // /** A grid can specify its vertical alignment to have all its columns vertically centered. */
  verticalAlign: PropTypes.oneOf(["bottom", "middle", "top"])
};

Grid.Column = GridColumn;
Grid.Row = GridRow;

Grid.displayName = "Grid";
Grid.Column.displayName = "Grid.Column";
Grid.Row.displayName = "Grid.Row";

export default Grid;

import React from "react";
import PropTypes from "prop-types";
import { Segment as SUIRSegment } from "@infinitecsolutions/semantic-ui-react";

const Segment = props => {
  return <SUIRSegment {...props} />;
};

Segment.propTypes = {
  /** A basic segment has no special formatting. */
  basic: PropTypes.bool,

  /** A segment can be circular. */
  circular: PropTypes.bool,

  /** A segment can clear floated content. */
  clearing: PropTypes.bool,

  /** Segment can be colored. */
  color: PropTypes.oneOf([
    "red",
    "orange",
    "yellow",
    "olive",
    "green",
    "teal",
    "blue",
    "violet",
    "purple",
    "pink",
    "brown",
    "grey",
    "black"
  ]),

  /** A segment may take up only as much space as is necessary. */
  compact: PropTypes.bool,

  /** A segment may show its content is disabled. */
  disabled: PropTypes.bool,

  /** Segment content can be floated to the left or right. */
  floated: PropTypes.oneOf(["left", "right"]),

  /** A segment can have its colors inverted for contrast. */
  inverted: PropTypes.bool,

  /** A segment may show its content is being loaded. */
  loading: PropTypes.bool,

  /** A segment can increase its padding. */
  padded: PropTypes.bool,

  /** Formatted to look like a pile of pages. */
  piled: PropTypes.bool,

  /** A segment may be formatted to raise above the page. */
  raised: PropTypes.bool,

  /** A segment can be formatted to appear less noticeable. */
  secondary: PropTypes.bool,

  /** A segment can have different sizes. */
  size: PropTypes.oneOf([
    "mini",
    "tiny",
    "small",
    "large",
    "big",
    "huge",
    "massive"
  ]),

  /** Formatted to show it contains multiple pages. */
  stacked: PropTypes.bool,

  /** A segment can be formatted to appear even less noticeable. */
  tertiary: PropTypes.bool,

  /** Formats content to be aligned as part of a vertical group. */
  textAlign: PropTypes.oneOf(["left", "center", "right"]),

  /** Formats content to be aligned vertically. */
  vertical: PropTypes.bool
};

Segment.Group = SUIRSegment.Group;

Segment.displayName = "Segment";

export default Segment;

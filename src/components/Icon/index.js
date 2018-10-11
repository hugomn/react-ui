import React from "react";
import PropTypes from "prop-types";
import { Icon as SUIRIcon } from "@infinitecsolutions/semantic-ui-react";

const Icon = props => {
  return <SUIRIcon {...props} />;
};

Icon.propTypes = {
  /** Formatted to appear bordered. */
  bordered: PropTypes.bool,

  /** Icon can formatted to appear circular. */
  circular: PropTypes.bool,

  /** Color of the icon. */
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

  /** Icons can display a smaller corner icon. */
  corner: PropTypes.bool,

  /** Show that the icon is inactive. */
  disabled: PropTypes.bool,

  /** Fitted, without space to left or right of Icon. */
  fitted: PropTypes.bool,

  /** Icon can flipped. */
  flipped: PropTypes.oneOf(["horizontally", "vertically"]),

  /** Formatted to have its colors inverted for contrast. */
  inverted: PropTypes.bool,

  /** Icon can be formatted as a link. */
  link: PropTypes.bool,

  /** Icon can be used as a simple loader. */
  loading: PropTypes.bool,

  /** Name of the icon. */
  name: PropTypes.string,

  /** Icon can rotated. */
  rotated: PropTypes.oneOf(["clockwise", "counterclockwise"]),

  /** Size of the icon. */
  size: PropTypes.oneOf([
    "mini",
    "tiny",
    "small",
    "large",
    "big",
    "huge",
    "massive"
  ])
};

Icon.Group = SUIRIcon.Group;

Icon.displayName = "Icon";

export default Icon;

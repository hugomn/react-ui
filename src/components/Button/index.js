import React from "react";
import PropTypes from "prop-types";
import { Button as SUIRButton } from "@infinitecsolutions/semantic-ui-react";

const Button = props => {
  return <SUIRButton {...props} />;
};

Button.propTypes = {
  /** A button can be circular. */
  circular: PropTypes.bool,

  /** A button can reduce its padding to fit into tighter spaces. */
  compact: PropTypes.bool,

  /** A button can show it is currently unable to be interacted with. */
  disabled: PropTypes.bool,

  /** A button can be aligned to the left or right of its container. */
  floated: PropTypes.oneOf(["left", "right"]),

  /** A button can take the width of its container. */
  fluid: PropTypes.bool,

  /** A button can be formatted to show different levels of emphasis. */
  primary: PropTypes.bool,

  /** A button can be formatted to show different levels of emphasis. */
  secondary: PropTypes.bool,

  /** A button can have different sizes. */
  size: PropTypes.oneOf([
    "mini",
    "tiny",
    "small",
    "medium",
    "large",
    "big",
    "huge",
    "massive"
  ]),

  /** A button can be formatted to toggle on and off. */
  toggle: PropTypes.bool
};

Button.displayName = "Button";

export default Button;

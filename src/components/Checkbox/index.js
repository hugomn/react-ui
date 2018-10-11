import React from "react";
import PropTypes from "prop-types";
import { Checkbox as SUIRCheckbox } from "@infinitecsolutions/semantic-ui-react";

const Checkbox = props => {
  return <SUIRCheckbox {...props} />;
};

Checkbox.propTypes = {
  /** Whether or not checkbox is checked. */
  checked: PropTypes.bool,

  /** A checkbox can appear disabled and be unable to change states */
  disabled: PropTypes.bool,

  /** Whether or not checkbox is indeterminate. */
  indeterminate: PropTypes.bool,

  /** Format as a radio element. This means it is an exclusive option. */
  radio: PropTypes.bool,

  /** A checkbox can be read-only and unable to change states. */
  readOnly: PropTypes.bool,

  /** Format to emphasize the current selection state. */
  slider: PropTypes.bool,

  /** Format to show an on or off choice. */
  toggle: PropTypes.bool
};

Checkbox.displayName = "Checkbox";

export default Checkbox;

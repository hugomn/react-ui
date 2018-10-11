import React from "react";
import PropTypes from "prop-types";
import { Popup as SUIRPopup } from "@infinitecsolutions/semantic-ui-react";

const Popup = props => {
  return <SUIRPopup {...props} />;
};

Popup.propTypes = {
  /** Display the popup without the pointing arrow. */
  basic: PropTypes.bool,

  /** A flowing Popup has no maximum width and continues to flow to fit its content. */
  flowing: PropTypes.bool,

  /** Whether the popup should not close on hover. */
  hoverable: PropTypes.bool,

  /** Invert the colors of the Popup. */
  inverted: PropTypes.bool,

  /** Events triggering the popup. */
  on: PropTypes.oneOf(["hover", "click", "focus"]),

  /** Position for the popover. */
  position: PropTypes.oneOf([
    "top left",
    "top right",
    "bottom right",
    "bottom left",
    "right center",
    "left center",
    "top center",
    "bottom center"
  ]),

  /** Popup size. */
  size: PropTypes.oneOf(["mini", "tiny", "small", "large", "huge"])
};

Popup.displayName = "Popup";

export default Popup;

import React from "react";
import PropTypes from "prop-types";
import { Modal as SUIRModal } from "@infinitecsolutions/semantic-ui-react";

const Modal = props => {
  return <SUIRModal {...props} />;
};

Modal.Content = SUIRModal.Content;
Modal.Content.displayName = "Modal.Content";
Modal.Description = SUIRModal.Description;
Modal.Header = SUIRModal.Header;

Modal.propTypes = {
  /** A modal can reduce its complexity */
  basic: PropTypes.bool,

  /** A modal can be vertically centered in the viewport */
  centered: PropTypes.bool,

  /** Initial value of open. */
  defaultOpen: PropTypes.bool,

  /** A Modal can appear in a dimmer. */
  dimmer: PropTypes.oneOf(["true", "inverted", "blurring"]),

  /** Controls whether or not the Modal is displayed. */
  open: PropTypes.bool,

  /** A modal can vary in size */
  size: PropTypes.oneOf(["fullscreen", "large", "mini", "small", "tiny"]),

  /** Element to be rendered in-place where the portal is defined. */
  trigger: PropTypes.node
};

Modal.displayName = "Modal";

export default Modal;

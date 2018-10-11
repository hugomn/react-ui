import React from "react";
import PropTypes from "prop-types";
import { Header as SUIRHeader } from "@infinitecsolutions/semantic-ui-react";

const Header = props => {
  return <SUIRHeader {...props} />;
};

Header.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),

  /** Format header to appear inside a content block. */
  block: PropTypes.bool,

  /** Show that the header is inactive. */
  disabled: PropTypes.bool,

  /** Inverts the color of the header for dark backgrounds. */
  inverted: PropTypes.bool,

  /** Content headings are sized with em and are based on the font-size of their container. */
  size: PropTypes.oneOf(["tiny", "small", "medium", "large", "big", "huge"]),

  /** Headers may be formatted to label smaller or de-emphasized content. */
  sub: PropTypes.bool,

  /** Align header content. */
  textAlign: PropTypes.oneOf(["left", "right"])
};

Header.Content = SUIRHeader.Content;
Header.Subheader = SUIRHeader.Subheader;

Header.displayName = "Header";

export default Header;

import React from "react";
import PropTypes from "prop-types";
import { Responsive as SUIRResponsive } from "@infinitecsolutions/semantic-ui-react";

const Responsive = props => {
  return <SUIRResponsive {...props} />;
};

Responsive.propTypes = {
  /** Fires callbacks immediately after mount. */
  fireOnMount: PropTypes.bool,

  /** The maximum width at which content will be displayed. */
  maxWidth: PropTypes.number,

  /** The minimum width at which content will be displayed. */
  minWidth: PropTypes.number
};

Responsive.onlyMobile = SUIRResponsive.onlyMobile;
Responsive.onlyTablet = SUIRResponsive.onlyTablet;
Responsive.onlyComputer = SUIRResponsive.onlyComputer;
Responsive.onlyLargeScreen = SUIRResponsive.onlyLargeScreen;
Responsive.onlyWidescreen = SUIRResponsive.onlyWidescreen;

Responsive.displayName = "Responsive";

export default Responsive;

import React from "react";
import PropTypes from "prop-types";
import { Accordion as SUIRAccordion, AccordionContent, AccordionTitle} from "@infinitecsolutions/semantic-ui-react";


const Accordion = props => {
  return <SUIRAccordion {...props} />;
};

Accordion.Content = AccordionContent;
Accordion.Title = AccordionTitle;

Accordion.propTypes = {

  /** Accordion can take its container width */
  fluid: PropTypes.bool,

  /** Accordion can have some basic styling to accordion panels. */
  styled: PropTypes.bool,

}

Accordion.displayName = "Accordion";


export default Accordion;

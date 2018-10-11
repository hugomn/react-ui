import React from "react";
import PropTypes from "prop-types";
import {
  Card as SUIRCard,
  CardHeader,
  CardDescription,
  CardMeta,
  CardContent
} from "@infinitecsolutions/semantic-ui-react";

const Card = props => {
  return <SUIRCard{...props} />;
};

Card.propTypes = {

  /** A Card can center itself inside its container. */
  centered: PropTypes.bool,

  /** Additional classes. */
  className: PropTypes.string,

  /** A Card can be formatted to take up the width of its container. */
  fluid: PropTypes.bool,

  /** A card can be formatted to link to other content. */
  link: PropTypes.bool,

  /** A Card can be formatted to raise above the page. */
  raised: PropTypes.bool,
}

Card.Content = CardContent;
Card.Header = CardHeader;
Card.Description = CardDescription;
Card.Meta = CardMeta;

Card.displayName = "Card";

export default Card;

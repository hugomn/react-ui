import React from "react";
import PropTypes from "prop-types";
import {
  Search as SUIRSearch,
  Category,
  Result,
  Results
} from "@infinitecsolutions/semantic-ui-react";

const Search = props => {
  return <SUIRSearch {...props} />;
};

Search.Category = Category;
Search.Result = Result;
Search.Results = Results;

Search.propTypes = {
  /** Minimum characters to query for results */
  minCharacters: PropTypes.number,

  /** Controls whether or not the results menu is displayed. */
  open: PropTypes.bool,

  /** Whether a "no results" message should be shown if no results are found. */
  showNoResults: PropTypes.bool,

  /** A search can have its results take up the width of its container. */
  fluid: PropTypes.bool,

  /** A search can show a loading indicator. */
  loading: PropTypes.bool,

  /** A search can have different sizes. */
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

Search.displayName = "Search";

export default Search;

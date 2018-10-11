import React from "react";
import PropTypes from "prop-types";
import {
  Dropdown as SUIRDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownHeader,
  DropdownDivider,
  DropdownSearchInput
} from "@infinitecsolutions/semantic-ui-react";

const Dropdown = props => {
  return <SUIRDropdown {...props} />;
};

Dropdown.Item = DropdownItem;
Dropdown.Menu = DropdownMenu;
Dropdown.Header = DropdownHeader;
Dropdown.Divider = DropdownDivider;
Dropdown.SearchInput = DropdownSearchInput;

Dropdown.propTypes = {
  /** A dropdown menu can open to the left or to the right. */
  direction: PropTypes.oneOf(["left", "right"]),

  /** A dropdown can be formatted to appear inline in other content. */
  inline: PropTypes.bool,

  /** A selection dropdown can allow multiple selections. */
  multiple: PropTypes.bool,

  /** Placeholder text. */
  placeholder: PropTypes.string,

  /**
   * A selection dropdown can allow a user to search through a large list of choices.
   * Pass a function here to replace the default search.
   */
  search: PropTypes.bool,

  /** A dropdown can be used to select between choices in a form. */
  selection: PropTypes.bool
};

Dropdown.displayName = "Dropdown";

export default Dropdown;

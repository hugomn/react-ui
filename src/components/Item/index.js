import React from "react";
import {
  Item as SUIRItem,
  ItemContent,
  ItemDescription,
  ItemExtra,
  ItemGroup,
  ItemHeader,
  ItemImage,
  ItemMeta
} from "@infinitecsolutions/semantic-ui-react";

const Item = props => {
  return <SUIRItem {...props} />;
};

Item.Content = ItemContent;
Item.Description = ItemDescription;
Item.Extra = ItemExtra;
Item.Group = ItemGroup;
Item.Header = ItemHeader;
Item.Image = ItemImage;
Item.Meta = ItemMeta;

export default Item;

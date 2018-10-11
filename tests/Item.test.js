import React from "react";
import { Item } from "../src/components";
import { shallow } from "enzyme";

describe("Item", () => {
  const SUIItem = shallow(<Item />).dive();

  it("should countain the classes 'ui' and 'item'", () => {
    expect(SUIItem.hasClass("item")).toBeTruthy();
  });
});

import React from "react";
import { Divider } from "../src/components";
import { shallow } from "enzyme";

describe("Divider", () => {
  const SUIDivider = shallow(<Divider />).dive();

  it("should render an element of type 'div'", () => {
    expect(SUIDivider.is("div")).toBeTruthy();
  });

  it("should countain the classes 'ui' and 'divider'", () => {
    expect(SUIDivider.hasClass("ui")).toBeTruthy();
    expect(SUIDivider.hasClass("divider")).toBeTruthy();
  });
});

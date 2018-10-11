import React from "react";
import { Dropdown } from "../src/components";
import { shallow } from "enzyme";

describe("Dropdown", () => {
  const SUIDropdown = shallow(<Dropdown />).dive();

  it("should render an element of type 'div'", () => {
    expect(SUIDropdown.is("div")).toBeTruthy();
  });

  it("should countain the classes 'ui' and 'dropdown'", () => {
    expect(SUIDropdown.hasClass("ui")).toBeTruthy();
    expect(SUIDropdown.hasClass("dropdown")).toBeTruthy();
  });
});

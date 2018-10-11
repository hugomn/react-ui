import React from "react";
import { Checkbox } from "../src/components";
import { shallow } from "enzyme";

describe("Checkbox", () => {
  const SUICheckbox = shallow(<Checkbox label="Test" />).dive();

  it("should render an element of type 'div'", () => {
    expect(SUICheckbox.is("div")).toBeTruthy();
  });

  it("should countain the classes 'ui' and 'checkbox'", () => {
    expect(SUICheckbox.hasClass("ui")).toBeTruthy();
    expect(SUICheckbox.hasClass("checkbox")).toBeTruthy();
  });

  it("should render the specified text as children", () => {
    expect(SUICheckbox.find("label").text()).toEqual("Test");
  });
});

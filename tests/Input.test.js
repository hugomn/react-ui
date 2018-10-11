import React from "react";
import { Input } from "../src/components";
import { shallow } from "enzyme";

describe("Input", () => {
  const SUIInput = shallow(<Input />).dive();

  it("should render an element of type 'div'", () => {
    expect(SUIInput.is("div")).toBeTruthy();
  });

  it("should countain the classes 'ui' and 'input'", () => {
    expect(SUIInput.hasClass("ui")).toBeTruthy();
    expect(SUIInput.hasClass("input")).toBeTruthy();
  });
});

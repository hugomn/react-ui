import React from "react";
import { Button } from "../src/components";
import { shallow } from "enzyme";

describe("Button", () => {
  const SUIButton = shallow(<Button>Test</Button>).dive();

  it("should render an element of type 'button'", () => {
    expect(SUIButton.is("button")).toBeTruthy();
  });

  it("should countain the classes 'ui' and 'button'", () => {
    expect(SUIButton.hasClass("ui")).toBeTruthy();
    expect(SUIButton.hasClass("button")).toBeTruthy();
  });

  it("should render the specified text as children", () => {
    expect(SUIButton.text()).toEqual("Test");
  });
});

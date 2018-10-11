import React from "react";
import { Header } from "../src/components";
import { shallow } from "enzyme";

describe("Header", () => {
  const SUIRHeader = shallow(<Header as="h1">Test</Header>).dive();

  it("should render an element of type 'h1'", () => {
    expect(SUIRHeader.is("h1")).toBeTruthy();
  });

  it("should countain the classes 'ui' and 'button'", () => {
    expect(SUIRHeader.hasClass("ui")).toBeTruthy();
    expect(SUIRHeader.hasClass("header")).toBeTruthy();
  });

  it("should render the specified text as children", () => {
    expect(SUIRHeader.text()).toEqual("Test");
  });
});

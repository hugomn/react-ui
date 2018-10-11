import React from "react";
import { Responsive } from "../src/components";
import { shallow } from "enzyme";

describe(Responsive.displayName, () => {
  const SUIResponsive = shallow(<Responsive as="div" />).dive();

  it("should render an element of type 'div'", () => {
    expect(SUIResponsive.is("div")).toBeTruthy();
  });
});

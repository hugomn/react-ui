import React from "react";
import { Container } from "../src/components";
import { shallow } from "enzyme";

describe(Container.displayName, () => {
  const SUIContainer = shallow(<Container padded />).dive();

  it("should render an element of type 'div'", () => {
    expect(SUIContainer.is("div")).toBeTruthy();
  });

  it("should countain the classes 'ui' and 'container'", () => {
    expect(SUIContainer.hasClass("ui")).toBeTruthy();
    expect(SUIContainer.hasClass("container")).toBeTruthy();
  });

  it("should render a padded Container with 'padded' class", () => {
    expect(SUIContainer.hasClass("padded")).toBeTruthy();
  });
});

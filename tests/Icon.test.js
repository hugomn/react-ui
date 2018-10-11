import React from "react";
import { Icon } from "../src/components";
import { shallow } from "enzyme";

describe(Icon.displayName, () => {
  const SUIIcon = shallow(<Icon />).dive();

  it("should render an element of type 'i' by default", () => {
    expect(SUIIcon.is("i")).toBeTruthy();
  });

  it("should countain the class 'icon'", () => {
    expect(SUIIcon.hasClass("icon")).toBeTruthy();
  });
});

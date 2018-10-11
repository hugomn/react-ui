import React from "react";
import { Menu } from "../src/components";
import { shallow } from "enzyme";

describe("Menu", () => {
  const SUIMenu = shallow(<Menu />).dive();

  it("should render an element of type 'div'", () => {
    expect(SUIMenu.is("div")).toBeTruthy();
  });

  it("should countain the classes 'ui' and 'menu'", () => {
    expect(SUIMenu.hasClass("ui")).toBeTruthy();
    expect(SUIMenu.hasClass("menu")).toBeTruthy();
  });
});

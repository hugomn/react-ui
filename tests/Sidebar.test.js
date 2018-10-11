import React from "react";
import { Sidebar } from "../src/components";
import { shallow } from "enzyme";

describe("Sidebar", () => {
  const SUISidebar= shallow(<Sidebar />)
    .dive()
    .find('div');

  it("should render an element of type 'div'", () => {
    expect(SUISidebar.is("div")).toBeTruthy();
  });

  it("should countain the classes 'ui' and 'sidebar'", () => {
    expect(SUISidebar.hasClass("ui")).toBeTruthy();
    expect(SUISidebar.hasClass("sidebar")).toBeTruthy();
  });
});

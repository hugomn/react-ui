import React from "react";
import { Grid } from "../src/components";
import { shallow } from "enzyme";

describe("Grid", () => {
  const SUIGrid = shallow(<Grid />).dive();

  it("should render an element of type 'div'", () => {
    expect(SUIGrid.is("div")).toBeTruthy();
  });

  it("should countain the classes 'ui' and 'grid'", () => {
    expect(SUIGrid.hasClass("ui")).toBeTruthy();
    expect(SUIGrid.hasClass("grid")).toBeTruthy();
  });
});

import React from "react";
import { Segment } from "../src/components";
import { shallow } from "enzyme";

describe(Segment.displayName, () => {
  const SUISegment = shallow(<Segment />).dive();

  it("should render an element of type 'div'", () => {
    expect(SUISegment.is("div")).toBeTruthy();
  });

  it("should countain the classes 'ui' and 'segment'", () => {
    expect(SUISegment.hasClass("ui")).toBeTruthy();
    expect(SUISegment.hasClass("segment")).toBeTruthy();
  });
});

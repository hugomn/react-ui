import React from "react";
import { Card } from "../src/components";
import { shallow } from "enzyme";

describe("Card", () => {
  const SUICard = shallow(<Card />).dive();

  it("should render an element of type 'card'", () => {
    expect(SUICard.is("div")).toBeTruthy();
  });

  it("should countain the classes 'ui' and 'card'", () => {
    expect(SUICard.hasClass("ui")).toBeTruthy();
    expect(SUICard.hasClass("card")).toBeTruthy();
  });
});

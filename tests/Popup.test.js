import React from "react";
import { Popup } from "../src/components";
import { shallow } from "enzyme";

describe("Popup", () => {
  const SUIPopup = shallow(<Popup />)
    .dive()
    .find("div");

  it("should render an element of type 'div'", () => {
    expect(SUIPopup.is("div")).toBeTruthy();
  });

  it("should countain the classes 'ui' and 'popup'", () => {
    expect(SUIPopup.hasClass("ui")).toBeTruthy();
    expect(SUIPopup.hasClass("popup")).toBeTruthy();
  });
});

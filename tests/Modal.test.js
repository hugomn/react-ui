import React from "react";
import { Modal } from "../src/components";
import { shallow } from "enzyme";

describe("Modal", () => {
  const SUIModal = shallow(<Modal />)
    .dive()
    .find('div')
    .first();

  it("should render an element of type 'div'", () => {
    expect(SUIModal.is("div")).toBeTruthy();
  });

  it("should countain the classes 'ui' and 'modal'", () => {
    expect(SUIModal.hasClass("ui")).toBeTruthy();
    expect(SUIModal.hasClass("modals")).toBeTruthy();
  });
});

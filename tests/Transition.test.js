import React from "react";
import { Transition } from "../src/components";
import { shallow } from "enzyme";

describe("Transition", () => {
  const SUITransition = shallow(
    <Transition>
      <div>Test</div>
    </Transition>
  ).dive();

  it("should render an element of type 'div'", () => {
    expect(SUITransition.is("div")).toBeTruthy();
  });

  it("should countain the classes 'transition'", () => {
    expect(SUITransition.hasClass("transition")).toBeTruthy();
  });
});

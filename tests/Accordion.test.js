import React from "react";
import { Accordion } from "../src/components";
import { mount } from "enzyme";

describe("Accordion", () => {
  const SUIAccordion= mount(<Accordion  />);

  it("should render an element of type 'div'", () => {
    expect(SUIAccordion.is(Accordion)).toBeTruthy();
  });

  it("should countain the classes 'ui' and 'Accordion'", () => {
    expect(SUIAccordion.find('div').hasClass("ui")).toBeTruthy();
    expect(SUIAccordion.find('div').hasClass("accordion")).toBeTruthy();
  });
});

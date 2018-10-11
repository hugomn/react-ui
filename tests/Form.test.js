import React from "react";
import { Form } from "../src/components";
import { shallow } from "enzyme";

describe("Form", () => {
  const SUIForm = shallow(<Form />).dive();

  it("should render an element of type 'form'", () => {
    expect(SUIForm.is("form")).toBeTruthy();
  });

  it("should countain the classes 'ui' and 'form'", () => {
    expect(SUIForm.hasClass("ui")).toBeTruthy();
    expect(SUIForm.hasClass("form")).toBeTruthy();
  });
});

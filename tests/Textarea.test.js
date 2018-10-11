import React from "react";
import { TextArea } from "../src/components";
import { shallow } from "enzyme";

describe("TextArea", () => {
  const SUITextArea = shallow(<TextArea />).dive();

  it("should render an element of type 'textarea'", () => {
    expect(SUITextArea.is("textarea")).toBeTruthy();
  });
});

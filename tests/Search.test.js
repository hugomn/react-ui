import React from "react";
import { Search } from "../src/components";
import { shallow } from "enzyme";

describe("Search", () => {
  const SUISearch = shallow(<Search />).dive();

  it("should countain the classes 'ui' and 'search'", () => {
    expect(SUISearch.hasClass("ui")).toBeTruthy();
    expect(SUISearch.hasClass("search")).toBeTruthy();
  });
});

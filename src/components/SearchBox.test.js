import React from "react";
import SearchBox from "./SearchBox";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<SearchBox />).toJSON();
  expect(tree).toMatchSnapshot();
});

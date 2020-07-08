import React from "react";
import Scroll from "./Scroll";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<Scroll />).toJSON();
  expect(tree).toMatchSnapshot();
});

/* import React from "react";
import Card from "./Card";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<Card />).toJSON();
  expect(tree).toMatchSnapshot();
});

 */
/* 
import React from "react";
import { shallow } from "enzyme";
import Card from "./Card";

import ShallowRenderer from "react-test-renderer/shallow";

it("test", () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Card />);
  const result = renderer.getRenderOutput();
  console.log(result);
  //expect(result).toMatchSnapshot();
});
 */
/* 
import React from "react";
import Card from "./Card";
import renderer from "react-test-renderer";

it("test", () => {
  const wrapper = renderer.create(<Card />).toJSON();
  console.log(wrapper);
  expect(wrapper).toMatchSnapshot();
}); */

import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Card from "./Card";

it("renders without crashing", () => {
  /* const wrapper = shallow(<Card />).debug();
  expect(wrapper).toMatchSnapshot(); */
  const wrapper = shallow(<Card />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

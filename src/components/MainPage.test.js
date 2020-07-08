import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";
import MainPage from "./MainPage";

/*
>>> Snapshot without enzyme shallow

// (1) The "react-test-renderer way
import renderer from "react-test-renderer";
wrapper = renderer.create(<MainPage {...mockProps} />).toJSON();
// (2) The react-test-renderer/shallow way
import ShallowRenderer from "react-test-renderer/shallow";
const renderer = new ShallowRenderer();
  wrapper = renderer.render(<MainPage {...mockProps} />); 
  
>>>Snapshot using enzyme require npm install enzyme-to-json and include in package.json:
  "jest": {
    "snapshotSerializers": [
      "enzyme-to-json/serializer"
    ]
  }

  and then use it like this:
  expect(toJson(wrapper)).toMatchSnapshot(); 
  */

let wrapper;

beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: "",
    isPending: false,
  };

  wrapper = shallow(<MainPage {...mockProps} />);
});
it("renders MainPage component witout crashing", () => {
  expect(toJson(wrapper)).toMatchSnapshot();
});

it("filters robots correctly (expecting no robot result)", () => {
  expect(wrapper.instance().filteredRobots()).toEqual([]);
});

it("filters robots correctly (expecting specific robot result)", () => {
  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 5,
        name: "John",
        email: "john@gmail.com",
      },
    ],
    searchField: "john",
    isPending: false,
  };
  const wrapper2 = shallow(<MainPage {...mockProps2} />);
  expect(wrapper2.instance().filteredRobots()).toEqual([
    {
      id: 5,
      name: "John",
      email: "john@gmail.com",
    },
  ]);
});

it("filters robots correctly2 (another empty robot result)", () => {
  const mockProps3 = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 5,
        name: "John",
        email: "john@gmail.com",
      },
    ],
    searchField: "a",
    isPending: false,
  };
  const robotsResult = [];
  const wrapper3 = shallow(<MainPage {...mockProps3} />);
  expect(wrapper3.instance().filteredRobots()).toEqual(robotsResult);
});

it("filters robots correctly3 (IsPending: true)", () => {
  const mockProps4 = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: "john",
    isPending: true,
  };
  const wrapper4 = shallow(<MainPage {...mockProps4} />);
  expect(wrapper4.length).toEqual(1);
});

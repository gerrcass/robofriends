import React from "react";
import { connect } from "react-redux";
import "./App.css";

import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
//import { robots } from "./robots.js";
import SearchBox from "../components/SearchBox";
import ErrorBoundry from "../components/ErrorBoundry";

import { setSearchField } from "../actions";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchField,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => {
      dispatch(setSearchField(event.target.value));
    },
  };
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  render() {
    const { searchField, onSearchChange } = this.props;
    const { robots } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return !robots.length ? (
      <h1 className="tc f2">Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="f2">RoboFriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots} />;
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React from "react";
import "./App.css";
import "tachyons";

import CardList from "./CardList";
import { robots } from "./robots.js";
import SearchBox from "./SearchBox";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: "",
    };
  }
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className="tc">
        <h1 className="f2">RoboFriends</h1>
        <SearchBox
          searchfield={this.state.searchfield}
          searchChange={this.onSearchChange}
        />
        <CardList robots={filteredRobots} />;
      </div>
    );
  }
}

export default App;

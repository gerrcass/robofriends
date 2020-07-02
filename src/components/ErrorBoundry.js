import React from "react";

class ErrorBoundry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    return this.state.hasError ? (
      //This message will be displayed when the application is in production.
      <h1>Ooops. That is not good.</h1>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundry;

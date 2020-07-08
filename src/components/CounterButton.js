import React from "react";

class CounterButton extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  /*  
    React component will re-render automatically whenever the parent renders, even if its props didn't change.
    So, trying to avoid innecesarily re-render is a big win when it comes to performance. 

    When you extend a class component from React.PureComponent, then that component will
    re-render only when its props actually change (much like a stateless or functional component does).
    But PureComponent does something call shallow comparation which can be tricky (some changes could be
    overlooked because of this).

    Instead you can use shouldComponentUpdate() for the same purpose and even get a little bit of control by
    running some logic using nextProps and nextState to determine when to render. Keep in mind that this 
    add an additional penalty to performance because it runs before each render (make sure to use it
    when is more likely to avoid render in most cases)

    NOTE: there's a tool call "Why you did update" that tells you in the console when you are rendering 
    some component but without any change in props... so it show you avoidable re-renders (development
    purpose only). https://github.com/maicki/why-did-you-update
  */
  shouldComponentUpdate(nextProps, nextState) {
    //console.log(nextProps, nextState);
    if (this.state.count !== nextState.count) {
      return true;
    }
    return false;
  }
  updateCount = () => {
    this.setState((state) => {
      return { count: state.count + 1 };
    });
  };

  render() {
    return (
      <button color={this.props.color} onClick={this.updateCount}>
        Count:{this.state.count}
      </button>
    );
  }
}

export default CounterButton;

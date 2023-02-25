import React, { Component, Fragment } from 'react';

class HocGamers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: 0,
      fighters: {
        vegeta: true,
        goku: true,
        frieza: true,
      },
    };
  }

  addOne = () => {
    console.log(this.props);
    this.setState(prevState => {
      return {
        hits: prevState.hits + 1,
      };
      return;
    });
  };
  render() {
    return (
      <Fragment>
        {this.props.render(this.state.hits, this.addOne, this.state.fighters)}
      </Fragment>
    );
  }
}

export default HocGamers;

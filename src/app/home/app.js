import React, { Component } from 'react';

export default class App extends Component {

  state = {
    number: 1,
  }

  handleIncrement = () => {
    this.setState({number: this.state.number + 1});
  }

  render() {
    return (
      <div>
        <h1>Number {this.state.number}</h1>
        <button onClick={() => this.handleIncrement()}>Increment!</button>
      </div>
    );
  }
}

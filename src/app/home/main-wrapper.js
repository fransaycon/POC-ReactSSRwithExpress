import React, { Component } from 'react';
import { MainContainer } from "../../common/container";

export default class MainWrapper extends Component {

  render() {
    return (
      <MainContainer>
          <title>Franrey Saycon - Portfolio</title>
        {this.props.children()}
      </MainContainer>
    );
  }
}

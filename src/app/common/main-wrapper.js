import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { colors } from "../constants";
import { ContentWrapper } from "./content-wrapper";

const MainContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: ${colors.grey};
  alignContent: center;
`

export default class MainWrapper extends Component {
  render() {
    return (
      <MainContainer>
        <Helmet>
          <title>Franrey Saycon - Portfolio</title>
        </Helmet>
        <ContentWrapper>
        {this.props.children}
        </ContentWrapper>
      </MainContainer>
    );
  }
}

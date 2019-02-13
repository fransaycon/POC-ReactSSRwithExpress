import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import styled, { createGlobalStyle } from 'styled-components';
import { colors } from '../constants';
import Kano from '../fonts/Kano.otf';

const KanoFont = createGlobalStyle`
    @font-face{
        font-family: Kano;
        src: url(${Kano});
    }
`;

const MainContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  font-family: 'Kano';
`

export default class MainWrapper extends Component {
  render() {
    return (
      <MainContainer>
        <KanoFont />
        <Helmet>
          <title>Franrey Saycon - Portfolio</title>
        </Helmet>
        {this.props.children}
      </MainContainer>
    );
  }
}

import AileronBold from '../fonts/Aileron-Bold.otf';
import Header from './header';
import Kano from '../fonts/Kano.otf';
import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { colors } from '../constants';
import { Helmet } from 'react-helmet';

const KanoFont = createGlobalStyle`
    @font-face{
        font-family: Kano;
        src: url(${Kano});
    }

    @font-face{
        font-family: Aileron-Bold;
        src: url(${AileronBold});
    }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: 'Kano';
  flex-wrap: wrap;
  width: 100vw;
`

export default class MainContainer extends Component {
    render() {
        return (
            <Container>
                <KanoFont />
                <Helmet>
                    <title>Franrey Saycon - Portfolio</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                </Helmet>
                {this.props.children}
            </Container>
        );
    }
}

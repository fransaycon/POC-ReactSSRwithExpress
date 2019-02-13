import React, { Component } from 'react';
import MainContainer from '../common/main-container';
import { BlueWrapper, WhiteWrapper } from '../common/sub-wrapper';
import styled from 'styled-components';
import {colors} from '../constants';


const HeaderName = styled.h1`
    font-size: 4.5em;
    color: ${colors.white};
    margin: 0;
    font-weight: 700;
    font-family: "Aileron-Bold";
`

const SubName = styled.h4`
    font-size: 1.25em;
    color: ${colors.white};
    margin: 0;
    font-weight: 300;
`

export default class HomePage extends Component {
    render(){
        return (
            <MainContainer>
                <BlueWrapper>
                    <HeaderName><b>FRANREY SAYCON</b></HeaderName>
                    <SubName>SOFTWARE ENGINEER · TEAM LEAD · UX ENTHUSIAST</SubName>
                </BlueWrapper>
                <WhiteWrapper>
                    <h1>Hello World!</h1>
                </WhiteWrapper>
                <BlueWrapper>
                    <h1>Hello World!</h1>
                </BlueWrapper>
            </MainContainer>
        );
    }
}

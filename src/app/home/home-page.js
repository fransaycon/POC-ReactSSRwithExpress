import React from 'react';
import MainContainer from '../common/main-container';
import styled from 'styled-components';
import { H1, H4 } from '../common/styled-text';
import { BlueWrapper, WhiteWrapper } from '../common/styled-wrapper';
import {colors} from '../constants';



export default class HomePage extends React.Component {
    render(){
        return (
            <MainContainer>
                <BlueWrapper>
                    <H1><b>FRANREY SAYCON</b></H1>
                    <H4>SOFTWARE ENGINEER · TEAM LEAD · UX ENTHUSIAST</H4>
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

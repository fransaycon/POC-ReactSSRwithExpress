import React from 'react';
import MainContainer from '../common/main-container';
import styled from 'styled-components';
import { H1, H4 } from '../common/styled-text';
import { ContentWrapper } from '../common/styled-wrapper';
import { BoxContainer, ContentContainer } from '../common/styled-container';
import { colors } from '../constants';


export default class HomePage extends React.Component {
    render(){
        return (
            <MainContainer>
                <BoxContainer color={colors.mainBlue}>
                    <ContentWrapper>
                        <ContentContainer>
                            <H1><b>FRANREY SAYCON</b></H1>
                            <H4>SOFTWARE ENGINEER · TEAM LEAD · UX ENTHUSIAST</H4>
                        </ContentContainer>
                    </ContentWrapper>
                </BoxContainer>
            </MainContainer>
        );
    }
}

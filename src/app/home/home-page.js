import React from 'react';
import MainContainer from '../common/main-container';
import styled from 'styled-components';
import { H1, H2, H4 } from '../common/styled-text';
import { ContentWrapper } from '../common/styled-wrapper';
import {
    BoxContainer,
    ContentContainer,
    AMAContainer,
    AMASubContainer,
    AMAGalleryContainer,
    AMASocialMediaContainer,
    PContainer,
} from '../common/styled-container';
import {
    AMAGalleryImage,
    SocialMediaImage,
} from '../common/styled-image';
import { colors } from '../constants';
import placeholder from '../images/placeholder.png';
import github from '../images/github.png';
import linkedin from '../images/linkedin.png';
import envelope from '../images/envelope.png';


export default class HomePage extends React.Component {
    render(){
        return (
            <MainContainer>
                <BoxContainer color={colors.mainBlue}>
                    <ContentWrapper>
                        <ContentContainer>
                            <H1 color={colors.white}><b>FRANREY SAYCON</b></H1>
                            <H4>SOFTWARE ENGINEER · TEAM LEAD · UX ENTHUSIAST</H4>
                        </ContentContainer>
                    </ContentWrapper>
                </BoxContainer>
            </MainContainer>
        );
    }
}

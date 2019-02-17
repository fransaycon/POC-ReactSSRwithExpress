import React from 'react';
import MainContainer from '../common/main-container';
import styled from 'styled-components';
import { H1, H2, H4 } from '../common/styled-text';
import { ContentWrapper } from '../common/styled-wrapper';
import {
    BoxContainer,
    ContentContainer,
    PlaceHolderContainer,
} from '../common/styled-container';
import {
    HeaderImage,
} from '../common/styled-image';
import {
    HeaderButton,
} from '../common/styled-button';
import { colors } from '../constants';
import placeholder from '../images/placeholder.png';
import github from '../images/github.png';
import linkedin from '../images/linkedin.png';
import envelope from '../images/envelope.png';
import portfolioImg from '../images/portfolio-img.png';
import Typing from 'react-typing-animation';

export default class HomePage extends React.Component {

    state = {
        doneTyping: false,
    }

    render(){
        return (
            <MainContainer>
                <BoxContainer color={colors.mainBlue}>
                    <ContentWrapper>
                        <ContentContainer>
                            <HeaderImage src={portfolioImg} />
                            <H1 color={colors.white}>FRANREY SAYCON</H1>
                            <PlaceHolderContainer>
                                <Typing 
                                    speed={5}
                                    hideCursor={true}
                                    onFinishedTyping={() => this.setState({doneTyping: true})}
                                >
                                    <H4>SOFTWARE ENGINEER · TEAM LEAD · UX ENTHUSIAST</H4>
                                </Typing>
                            </PlaceHolderContainer>
                            <PlaceHolderContainer topMargin={50}>
                                {this.state.doneTyping &&
                                    <HeaderButton>
                                        franreysaycon@gmail.com
                                    </HeaderButton>
                                }
                            </PlaceHolderContainer>
                        </ContentContainer>
                    </ContentWrapper>
                </BoxContainer>
            </MainContainer>
        );
    }
}

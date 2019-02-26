import React from 'react';
import MainContainer from '../common/main-container';
import styled from 'styled-components';
import { H1, H2, H3, H4, P } from '../common/styled-text';
import { ContentWrapper } from '../common/styled-wrapper';
import {
    AboutContainer,
    BoxContainer,
    ContentContainer,
    PlaceHolderContainer,
    DoubleContentContainer,
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
import SkillChart from './skill-chart';
import SkillList from './skill-list';
import {
    MainButton
} from '../common/styled-button';

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
                                    <H4 color={colors.white}>SOFTWARE ENGINEER · TEAM LEAD · UX ENTHUSIAST</H4>
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
                <BoxContainer color={colors.white}>
                    <ContentWrapper>
                        <DoubleContentContainer>
                            <AboutContainer>
                                <H2 color={colors.purple} contentHeader={true}>I'M AN ENGINEER</H2>
                                <P>
                                Born a problem-solver. I took up BS Computer Science course to be my main sword.
                                I have an advocacy to create a quality service one day that improves our way of life as well as manage it.
                                Always data-driven and output-oriented, I’m an experience web, api and native js mobile developer.
                                    <br/><br/>
                                I built websites from the ground up from the back up to the front.
                                In a team environment, I also made sure our dev environments were easy to reproduce and builds were fast for production use.
                                I love tackling challenges whether it be real life or online coding problems.
                                I keep myself updated in tech through blogs and media sites.
                                </P>
                            </AboutContainer>
                            <AboutContainer>
                                <SkillChart />
                                <SkillList />
                                <MainButton>SEE MY PROJECTS</MainButton>
                            </AboutContainer>
                        </DoubleContentContainer>
                    </ContentWrapper>
                </BoxContainer>
                <BoxContainer color={colors.white}>
                    <ContentWrapper>
                        <DoubleContentContainer>
                            <AboutContainer>
                            </AboutContainer>
                            <AboutContainer>
                                <H2 color={colors.purple} contentHeader={true}>I'M A LEADER</H2>
                                <P>
                                    "The first and greatest victory is to conquer yourself". - Plato
                                    This is my philosophy in improving myself and my mindset that I want to impart to others.
                                    <br/>
                                    <br/>
                                    I believe the aim of leadership is to bring out the best in people.
                                    It's never been just about taking charge but also having that valuable empathy to serve.
                                    I was an org leader back in college and HS. I have experience in organizing events and team building activities.
                                    <br/>
                                    <br/>
                                    In the tech environemnt, I'm exposed to AGILE processes. Whether it may be Kanban or SCRUM etc.
                                    I have adapted to apply these processes to improve our team's development cycle.
                                    I trained people as well as speak in different meetups.
                                </P>
                            </AboutContainer>
                        </DoubleContentContainer>
                    </ContentWrapper>
                </BoxContainer>

            </MainContainer>
        );
    }
}

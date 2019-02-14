import React from 'react';
import MainContainer from '../common/main-container';
import { H1 } from '../common/styled-text';
import { BlueWrapper } from '../common/styled-wrapper';

export default class BlogPage extends React.Component {

    render(){
        return(
            <MainContainer>
                <BlueWrapper>
                    <H1>This is the Blog Page</H1>
                </BlueWrapper>
            </MainContainer>
        );
    }
}

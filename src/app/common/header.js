import React from 'react';
import styled from 'styled-components';
import { colors, zIndex } from '../constants';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    position: absolute;
    top: 0;
    width: 100%;
    margin-top: 35px;
    padding-right: 20vw;
`

const PageLink = styled.a`
    font-size: 1.25em;
    color: ${colors.white};
    margin-left: 30px;
`

const Header = props => {
    return <Container>
        <PageLink>Home</PageLink>
        <PageLink>About</PageLink>
        <PageLink>Projects</PageLink>
        <PageLink>Blog</PageLink>
    </Container>
}

export default Header;

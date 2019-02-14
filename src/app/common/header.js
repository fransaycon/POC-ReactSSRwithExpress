import React from 'react';
import styled from 'styled-components';
import { colors, zIndex } from '../constants';
import { Link } from 'react-router-dom';

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

const PageLink = styled(Link)`
    font-size: 1.25em;
    color: ${colors.white};
    margin-left: 30px;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`

const Header = props => {
    return <Container>
        <PageLink to='/'>Home</PageLink>
        <PageLink to='/about'>About</PageLink>
        <PageLink to='/projects'>Projects</PageLink>
        <PageLink to='/blog'>Blog</PageLink>
    </Container>
}

export default Header;

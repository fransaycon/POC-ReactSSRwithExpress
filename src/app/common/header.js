import React from 'react';
import styled from 'styled-components';
import { colors, zIndex, breakpoints } from '../constants';
import { Link } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-self: flex-end;
    margin-top: 35px;
    padding-right: 10vw;
    position: absolute;
    top: 0;

    @media (min-width: ${breakpoints.phone}){
        align-self: center;
        padding-right: 0;
    }
`

const PageLink = styled(Link)`
    font-size: 25px;
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

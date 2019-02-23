import React from 'react';
import { colors, breakpoints, fontSize } from '../constants';
import styled from 'styled-components';

export const H1 = styled.h1`
    font-size: ${fontSize.large};
    color: ${props => props.color};
    font-weight: 700;
    line-height: 0.85;
    font-family: "Aileron-Bold";
    margin: 5px;

    @media (min-width: ${breakpoints.desktop}){
        font-size: ${fontSize.xLarge};
    }
`

export const H2 = styled.h2`
    font-size: ${fontSize.medium};
    color: ${props => props.color};
    margin: 0;
    font-weight: 700;
    font-family: "Aileron-Bold";
    line-height: 0.85;

    @media (min-width: ${breakpoints.desktop}){
        font-size: ${fontSize.large};

        ${props => props.contentHeader &&`
            text-align: start;
        `}
    }
`

export const H3 = styled.h3`
    font-size: ${fontSize.small};
    color: ${props => props.color};
    margin: 0;
    font-weight: 700;
    font-family: "Aileron-Bold";
    line-height: 0.85;

    @media (min-width: ${breakpoints.desktop}){
        font-size: ${fontSize.medium};
    }
`

export const H4 = styled.h4`
    font-size: ${fontSize.xSmall};
    color: ${props => props.color};
    margin: 0;
    font-weight: 300;

    @media (min-width: ${breakpoints.desktop}){
        font-size: ${fontSize.small};
        white-space: nowrap;
        ${props => props.animated && `
            overflow: hidden;
            animation: typing 2s steps(40, end);
        `}
    }

    @keyframes typing {
      from { width: 0 }
      to { width: 100% }
    }
`

export const P = styled.p`
    margin: 0;
    text-align: justify;
    font-size: ${fontSize.xSmall};
    margin-top: 15px;
    margin-bottom: 15px;

    @media (min-width: ${breakpoints.desktop}){
        margin-top: 0px;
        margin-bottom: 0px;
    }
`

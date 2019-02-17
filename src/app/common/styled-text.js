import React from 'react';
import { colors, breakpoints } from '../constants';
import styled from 'styled-components';

export const H1 = styled.h1`
    font-size: 4em;
    color: ${props => props.color};
    font-weight: 700;
    line-height: 0.85;
    font-family: "Aileron-Bold";
    margin: 5px;

    @media (min-width: ${breakpoints.desktop}){
        font-size: 5em;
    }
`

export const H2 = styled.h1`
    font-size: 1.25em;
    color: ${props => props.color};
    margin: 0;
    font-weight: 700;
    font-family: "Aileron-Bold";
`

export const H4 = styled.h4`
    font-size: 1.25em;
    color: ${colors.white};
    margin: 0 auto;
    font-weight: 300;

    @media (min-width: ${breakpoints.desktop}){
        font-size: 2em;
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
    align: justify;
`
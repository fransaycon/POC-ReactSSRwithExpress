import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../constants';

export const BoxContainer = styled.div`
    display: flex;
    background-color: ${props => props.color};
    width: inherit;
    min-height: 95vh;

    @media(min-width: ${breakpoints.desktopLarge}){
        min-height: 800px;
    }
`

export const ContentContainer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	height: inherit;
    justify-content: center;
    min-height: inherit;
    text-align: center;
`

export const PlaceHolderContainer = styled.div`
	height: 70px;

	${props => props.topMargin && `
		margin-top: ${props.topMargin}px;
	`}

    @media (min-width: ${breakpoints.tablet}){
        height: 50px;
    }
`

export const DoubleContentContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: inherit;
    justify-content: center;
    min-height: inherit;
    text-align: center;
    max-width: inherit;
    word-break: breakline;

    @media (min-width: ${breakpoints.tablet}){
        flex-direction: row;
    }
`

export const AboutContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    height: 50%;
    flex: 1;

    @media (min-width: ${breakpoints.tablet}){
        max-width: 50%;
        height: inherit;
        min-height: inherit;
        padding: 20px;
    }
`

export const ChartContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    flex-direction: column;
    margin-bottom: 15px;

    @media(min-width: ${breakpoints.desktop}){
        margin-bottom: 0px;
    }
`
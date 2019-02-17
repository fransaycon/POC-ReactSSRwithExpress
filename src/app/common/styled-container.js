import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../constants';

export const BoxContainer = styled.div`
    display: flex;
    background-color: ${props => props.color};
    width: inherit;
    height: 95vh;
    min-height: 350px;

    @media (min-width: ${breakpoints.tablet}){
        min-height: 600px;
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

export const AMAContainer = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    height: inherit;

`

export const AMASubContainer = styled.div`
    display: flex;
    flex-basis: 50%;
    height: inherit;
    border-color: black;
    border-width: 2px;
    flex-direction: column;
    justify-content: space-around;
`

export const AMAGalleryContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    align-self: center;
    flex-wrap: wrap;
    justify-self: flex-start;
`

export const AMASocialMediaContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
`

export const PContainer = styled.div`
    height: auto;
    width: inherit;
    text-align: justify;
`


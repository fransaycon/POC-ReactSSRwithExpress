import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../constants';

export const BoxContainer = styled.div`
    display: flex;
    background-color: ${props => props.color};
    width: inherit;
    height: 90vh;
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

export const PlaceHolderContainer = styled.div`
	height: 70px;

	${props => props.topMargin && `
		margin-top: ${props.topMargin}px;
	`}

	@media (min-width: ${breakpoints.tablet}){
		height: 50px;
	}
`
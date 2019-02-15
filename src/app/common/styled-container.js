import React from 'react';
import styled from 'styled-components';

export const BoxContainer = styled.div`
    display: flex;
    background-color: ${props => props.color};
    height: 90vh;
    width: 100%;
`

export const ContentContainer = styled.div`
	display: flex;
	align-items: column;
	flex-direction: column;
	height: inherit;
	justify-content: column;
`

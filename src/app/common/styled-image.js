import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../constants';

export const HeaderImage = styled.img`
	width: 175px;

	@media (min-width: ${breakpoints.tablet}){
	    width: 250px;
	}
`

import React from 'react';
import styled from 'styled-components';
import {colors, breakpoints} from '../constants';

export const HeaderButton = styled.a`
	border-radius: 25px;
	padding: 10px;
	background-color: ${colors.mainOrange};
	color: ${colors.white};
	margin-top: 30px;
	font-size: 1.25em;
	animation: fadein 2s;

	@media (min-width: ${breakpoints.desktop}){
	    font-size: 1.75em;
	}

	@keyframes fadein {
	    from { opacity: 0; }
	    to   { opacity: 1; }
	}
`

export const MainButton = styled.a`
    padding: 10px;
    text-align: center;
    background-color: ${colors.mainOrange};
    color: ${colors.white};
    border-radius: 20px;
`

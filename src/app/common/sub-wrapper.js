import React from 'react';
import styled from 'styled-components';
import { colors } from '../constants';


export let BlueWrapper = styled.div`
    display: flex;
    height: 90vh;
    background-color: ${colors.mainBlue};
    padding-left: 10vw;
    padding-right: 10vw;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export let WhiteWrapper = styled.div`
    display: flex;
    height: 90vh;
    background-color: ${colors.white};
    padding-left: 10vw;
    padding-right: 10vw;
    width: 100%;
    justify-content: center;
    align-items: center;
`

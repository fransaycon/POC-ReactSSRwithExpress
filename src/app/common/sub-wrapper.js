import React from 'react';
import styled from 'styled-components';
import { colors } from '../constants';


export let BlueWrapper = styled.div`
    display: flex;
    height: 90vh;
    background-color: ${colors.mainBlue};
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export let WhiteWrapper = styled.div`
    display: flex;
    height: 90vh;
    background-color: ${colors.white};
    width: 100%;
    justify-content: center;
    align-items: center;
`

import React from 'react';
import styled from 'styled-components';
import { colors, fontSize } from '../constants';

const StyledItem = styled.span`
    background-color: ${colors.secondaryOrange};
    color: ${colors.white};
    border-radius: 10px;
    padding: 5px;
    font-size: ${fontSize.xSmall};
    margin-left: 5px;


`

const SkillItem = props => {
    return <StyledItem>{props.text}</StyledItem>
}

export default SkillItem;

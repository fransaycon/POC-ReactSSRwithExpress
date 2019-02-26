import React from 'react';
import {H4} from '../common/styled-text';
import { colors, breakpoints } from '../constants';
import SkillItem from './skill-item';
import styled from 'styled-components';

const SkillContainer = styled.div`
    display: flex;
    margin-bottom: 15px;
    flex-direction: column;
    justify-content: space-around;

    @media min-height(${breakpoints.tablet}){
        margin-bottom: 0px;
    }
`

const CustomH4 = styled(H4)`
    margin-bottom: 10px;
`

const MarginDiv = styled.div`
    margin-bottom: 10px;
`

const SkillList = () => {

    const JS = ['React', 'Redux', 'ReactNative'];
    const PYTHON = ['Flask', 'Django', 'Tensorflow'];
    const DATABASE = ['MySQL', 'MongoDB'];

    return <SkillContainer>
        <CustomH4 color={colors.purple}>JS Framework/Lib</CustomH4>
        <MarginDiv>
            {   JS.map( item => {
                return <SkillItem text={item} key={item}/>
            })}
        </MarginDiv>
        <CustomH4 color={colors.purple}>Python Framework/Lib</CustomH4>
        <MarginDiv>
            {   PYTHON.map( item => {
                return <SkillItem text={item} key={item}/>
            })}
        </MarginDiv>
        <CustomH4 color={colors.purple}>Database</CustomH4>
        <MarginDiv>
            {   DATABASE.map( item => {
                return <SkillItem text={item} key={item}/>
            })}
        </MarginDiv>
    </SkillContainer>
}

export default SkillList;

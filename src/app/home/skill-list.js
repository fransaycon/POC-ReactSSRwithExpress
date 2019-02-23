import React from 'react';
import {H4} from '../common/styled-text';
import { colors } from '../constants';

const SkillList = props => {
    return <div>
        <H4 color={colors.purple}>JS Framework/Lib</H4>
        <br />
        React.js, Redux.js, ReactNative
        <br />
        Rx.js, Charts.js, StyledComponents
        <br />
        <br />
        <H4 color={colors.purple}>Python Framework/Lib</H4>
        <br/>
        Flask, Django, SciKit
        <br/>
        Tensorflow, Pandas
        <br />
        <br />
        <H4 color={colors.purple}>Database</H4>
        MySQL, MongoDB
        <br/>
    </div>
}

export default SkillList;

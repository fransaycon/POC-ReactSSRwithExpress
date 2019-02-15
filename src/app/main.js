import React from 'react';
import HomePage from './home/home-page';
import {Switch, Route} from 'react-router-dom';

const Main = props => {

    return (
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/about' component={HomePage}/>
            <Route path='/blog' component={HomePage}/>
            <Route path='/projects' component={HomePage}/>
        </Switch>
    );
}

export default Main;

import React from 'react';
import HomePage from './home/home-page';
import AboutPage from './about/about-page';
import BlogPage from './blog/blog-page';
import ProjectsPage from './projects/projects-page';
import {Switch, Route} from 'react-router-dom';

const Main = props => {

    return (
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/about' component={AboutPage}/>
            <Route path='/blog' component={BlogPage}/>
            <Route path='/projects' component={ProjectsPage}/>
        </Switch>
    );
}

export default Main;

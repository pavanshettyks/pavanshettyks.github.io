import React from 'react'
import { Switch, Route } from 'react-router-dom';

import LandingPage from './LandingPage';
import ContactMe from './ContactMe';
import AboutMe from './AboutMe';
import Projects from './Projects'
import Skills from './Skills'

export default function Main() {
    return (
        <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route path="/aboutme" component={AboutMe} />
                <Route path="/contact" component={ContactMe} />
                <Route path="/projects" component={Projects} />
                <Route path="/skills" component={Skills} />  
      </Switch>
    )
}

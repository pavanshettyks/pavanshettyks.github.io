import React from 'react'
import { Switch, Route } from 'react-router-dom';

import LandingPage from './LandingPage';
import ContactMe from './ContactMe';
import AboutMe from './AboutMe';
import Projects from './Projects'
import Skills from './Skills'

export default function Main() {
    return (
        <div >
                <LandingPage />
                <AboutMe />
                <Projects />
                <Skills />  
                 
                 <ContactMe id="contact"/>
        </div>
    )
}

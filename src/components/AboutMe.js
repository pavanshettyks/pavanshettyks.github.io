import React from 'react'
import {ProgressBar} from 'react-mdl'

export default function AboutMe() {
    return (
        <div id="aboutme">
            <div id= "education"> 
                    
                    <h2>Education</h2>
                    <hr />
                        <h4>California State University, Fullerton</h4>
                        <p>2018 - Present</p>
                        <h5>Master's in Computer Science</h5>
                        <h4>Visvesvaraya Technological University, India</h4>
                        <p>2011 - 2015</p>
                        <h5>Bachelors's in Information Science & Engineering </h5>
                    <h2>Experience</h2>
                    <hr />
                        <h4>SAP Labs India</h4>
                        <p>2015 - 2018</p>
                        <h5>Worked on SAP ABAP, SAP Fiori Smart Template. Developed API's for 3rd party Intergration.
                        Specialization in Business Partner and Material Master area.</h5>
            </div>
            <div id="skills">
                    <h2>Skills</h2>
                    <hr />
                    <div id="skill">
                            <h5>Python</h5> <ProgressBar style={{margin: 'auto', width: '75%', height: '15px'}} progress={92} />
                    </div>
                    <div id="skill">
                            <h5>React</h5> <ProgressBar style={{margin: 'auto', width: '75%', height: '15px'}} progress={87} />
                    </div>
                    <div id="skill">
                            <h5>React Native</h5> <ProgressBar style={{margin: 'auto', width: '75%', height: '15px'}} progress={88} />
                    </div>
                    <div id="skill">
                            <h5>SAP ABAP</h5> <ProgressBar style={{margin: 'auto', width: '75%', height: '15px'}} progress={84} />
                    </div>
                    <div id="skill">
                            <h5>Javascript</h5> <ProgressBar style={{margin: 'auto', width: '75%', height: '15px'}} progress={80} />
                    </div>
                    <div id="skill">
                            <h5>Java</h5> <ProgressBar style={{margin: 'auto', width: '75%', height: '15px'}} progress={70} />
                    </div>
                    <div id="skill">
                            <h5>HTML, CSS</h5> <ProgressBar style={{margin: 'auto', width: '75%', height: '15px'}} progress={80} />
                    </div>
            
            </div>

        </div>
    )
}

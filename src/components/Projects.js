import React,  { Component }  from 'react'
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

import ReactNativeProjects from './ReactNativeProjects'
import ReactProjects from './ReactProjects'
import PythonProjects from './PythonProjects'

class Projects extends Component {
    constructor(props){
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleTabs(){
        if(this.state.activeTab === 0){
            return <ReactProjects />
        }
        else if (this.state.activeTab === 1){
            return <ReactNativeProjects/>
        }
        else{
            return <PythonProjects/>
        }
    }
    render(){
            return (
                <div id="projects">
                    
                        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                            <Tab>React</Tab>
                            <Tab>React Native</Tab>
                            <Tab>Python</Tab>
                        </Tabs>
                                        
                             <div > {this.toggleTabs()}</div>
                     
                </div>
            )
    }
}

export default Projects;

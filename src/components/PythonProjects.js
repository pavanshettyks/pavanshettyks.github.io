import React from 'react'
import { Grid, Cell, Card, CardTitle, CardText, CardActions, Button, } from 'react-mdl';
import LogoPython from '../images/LogoPython.png'

export default function PythonProjects() {
    return (
        <div className="project-grids">
        <Grid> 
           
            <Cell col={4}> 
            <Card shadow={4} style={{ margin: 'auto'}}>
                 <CardTitle style={{color: '#fff', height: '160px', background: `url(${LogoPython}) center / cover`}}>Time Table Scheduler</CardTitle>
                <CardText>
                       Time Table Scheduler to assign work for individuals. This react applcation uses Redux and Google Firebase.
                </CardText>
                <CardActions border>
                        <Button href ="https://github.com/pavanshettyks/scheduler" target="_blank" colored>View on Github</Button>
                </CardActions>
               {/*  <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu> */}
            </Card>
            </Cell>

            <Cell col={4}> 
            <Card shadow={4} style={{ margin: 'auto'}}>
                 <CardTitle style={{color: '#fff', height: '160px', background: `url(${LogoPython}) center / cover`}}>Portfolio Site</CardTitle>
                <CardText>
                        Personal portfolio Website built using ReactJS using react material design library.
                </CardText>
                <CardActions border>
                        <Button href ="https://github.com/pavanshettyks/my-portfolio" target="_blank" colored>View on Github</Button>
                </CardActions>
               {/*  <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu> */}
            </Card>
            </Cell>

            <Cell col={4}> 
            <Card shadow={4} style={{ margin: 'auto'}}>
                 <CardTitle style={{color: '#fff', height: '160px', background: `url(${LogoPython}) center / cover`}}>Simple Inventory Manager</CardTitle>
                <CardText>
                        React Application to manage the Inventory of Signages. This application uses
                        Google Firebase for real-time database.
                </CardText>
                <CardActions border>
                        <Button href ="https://github.com/pavanshettyks/count-signs" target="_blank" colored>View on Github</Button>
                </CardActions>
               {/*  <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu> */}
            </Card>
            </Cell>
            <Cell col={4}> 
            <Card shadow={4} style={{ margin: 'auto'}}>
                 <CardTitle style={{color: '#fff', height: '160px', background: `url(${LogoPython}) center / cover`}}>To Do List</CardTitle>
                <CardText>
                        Simple To Do List application built using React JS
                </CardText>
                <CardActions border>
                        <Button href ="https://github.com/pavanshettyks/to-do-list" target="_blank" colored>View on Github</Button>
                </CardActions>
               {/*  <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu> */}
            </Card>
            </Cell>

       </Grid>    

</div>
    )
}

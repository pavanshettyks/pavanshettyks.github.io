import React from 'react'
import { Grid, Cell, Card, CardTitle, CardText, CardActions, Button, } from 'react-mdl';
import LogoReactNative from '../images/LogoReactNative.jpg'

export default function ReactNativeProjects() {
    return (
        <div className="project-grids">
        <Grid> 

          <Cell col={4}> 
                <Card shadow={4} style={{ margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '160px', background: `url(${LogoReactNative}) center / cover`}}>Easy Notes</CardTitle>
                    <CardText>
                            React Native application to scan the image and convert it into notes. Built using Firebase ML Kit and Redux.
                            
                    </CardText>
                    <CardActions border>
                            <Button href ="https://github.com/pavanshettyks/EasyNotes" target="_blank" colored>View on Github</Button>
                    </CardActions>
                {/*  <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu> */}
                </Card>
            </Cell>


           <Cell col={4}> 
            <Card shadow={4} style={{ margin: 'auto'}}>
                 <CardTitle style={{color: '#fff', height: '160px', background: `url(${LogoReactNative}) center / cover`}}>Manage Bills</CardTitle>
                <CardText>
                        Simple React Native Android Application to manage and split bills
                </CardText>
                <CardActions border>
                        <Button href ="https://github.com/pavanshettyks/ManageBills" target="_blank" colored>View on Github</Button>
                </CardActions>
               {/*  <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu> */}
            </Card>
            </Cell>

            <Cell col={4}> 
            <Card shadow={4} style={{ margin: 'auto'}}>
                 <CardTitle style={{color: '#fff', height: '160px', background: `url(${LogoReactNative}) center / cover`}}>To Do List with Firebase</CardTitle>
                <CardText>
                    Simple To Do List application with real time database using Google Firebase for Andorid
                </CardText>
                <CardActions border>
                        <Button href ="https://github.com/pavanshettyks/ListToDo" target="_blank" colored>View on Github</Button>
                </CardActions>
               {/*  <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu> */}
            </Card>
            </Cell>

            <Cell col={4}> 
            <Card shadow={4} style={{ margin: 'auto'}}>
                 <CardTitle style={{color: '#fff', height: '160px', background: `url(${LogoReactNative}) center / cover`}}>React Native Cam</CardTitle>
                <CardText>
                        React Native Application to click and save picture using React Camera
                </CardText>
                <CardActions border>
                        <Button href ="https://github.com/pavanshettyks/testCam" target="_blank" colored>View on Github</Button>
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

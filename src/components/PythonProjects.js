import React from 'react'
import { Grid, Cell, Card, CardTitle, CardText, CardActions, Button, } from 'react-mdl';
import LogoPython from '../images/LogoPython.png'

export default function PythonProjects() {
    return (
        <div className="project-grids">
        <Grid> 
           
            <Cell col={4}> 
                <Card shadow={4} style={{ margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '160px', background: `url(${LogoPython}) center / cover`}}>Auto Enroll</CardTitle>
                    <CardText>
                        Automation of enrolling to CSU Fullerton classes using python and selenium-python. 
                        Application requires Google Chrome...
                    </CardText>
                    <CardActions border>
                            <Button href ="https://github.com/pavanshettyks/Auto_Enroll" target="_blank" colored>View on Github</Button>
                    </CardActions>
                {/*  <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu> */}
                </Card>
            </Cell>

            <Cell col={4}> 
                <Card shadow={4} style={{ margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '160px', background: `url(${LogoPython}) center / cover`}}>Face Recogition</CardTitle>
                    <CardText>
                            Python Face Recogition application dlib's face_recognition library.
                            Application needs to be trained with sample data.
                    </CardText>
                    <CardActions border>
                            <Button href ="https://github.com/pavanshettyks/Face-Recognition" target="_blank" colored>View on Github</Button>
                    </CardActions>
                {/*  <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu> */}
                </Card>
            </Cell>

            <Cell col={4}> 
                <Card shadow={4} style={{ margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '160px', background: `url(${LogoPython}) center / cover`}}>Face Recogition using OpenCV</CardTitle>
                    <CardText>
                            Python Face Recogition application openCV library.
                            Application needs to be trained with sample data.
                    </CardText>
                    <CardActions border>
                            <Button href ="https://github.com/pavanshettyks/Face-Recognition-using-OpenCV" target="_blank" colored>View on Github</Button>
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

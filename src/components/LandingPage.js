import React from 'react'
import profile from '../image/profile.jpg'
import { Grid, Cell } from 'react-mdl';

export default function LandingPage() {
    return (
        <div  id="home">
        

        <Grid className="landing-grid">
          <Cell col={12}>

                <div  className = "profileDiv">
                     <img src= {profile} alt ='avatar' className = "profile_pic" />
                </div>

            <div className="banner-text-div">
               <h1> ML and Full Stack Web </h1>
               <h1>Developer </h1>

                <hr/>

                <p> Python | React | React Native |  SAP ABAP  | HTML/CSS | Bootstrap | 
                    JavaScript | NodeJS | MongoDB | Sql</p>

                 <div className="sociallinks-div">

                        {/* LinkedIn */}
                        <a href="https://www.linkedin.com/in/pavan-kumar-k-s-65b71916a/" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-linkedin-square" aria-hidden="true" />
                        </a>

                        {/* Github */}
                        <a href="https://github.com/pavanshettyks" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-github-square" aria-hidden="true" />
                        </a>

                        {/* Instagram */}
                        <a href="https://www.instagram.com/pavan_shetty_k/" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-instagram" aria-hidden="true"></i>
                        </a>


                 </div>
            </div>
          </Cell>
        </Grid>
        </div>
    )
}

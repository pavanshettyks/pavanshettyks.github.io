import React from 'react'
import profile from '../image/profile.jpg'

export default function LandingPage() {
    return (
        <div  id="home">
            <div  className = "profileDiv">
                <img src= {profile} alt ='avatar' className = "profile_pic" />
            </div>
            <div style={{flex:3}}>
                LandingPage
            </div>
        </div>
    )
}

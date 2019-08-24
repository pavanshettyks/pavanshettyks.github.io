import React from 'react'
import profile from '../images/profile.jpg'

export default function ContactMe() {
    return (
        <div id="contact" className="ContactDiv">
                <div className="ContactContainer">
                    <div className="ContactLeft">
                        <h3>Pavan Kumar</h3>
                        <img src= {profile} alt ='avatar' className = "display_pic" />
                        <p>
                            Hey, <br/>
                            Thanks for visiting my site.<br/>
                            Feel free to contact me anytime.<br/>
                            Thank You :)<br/>
                        </p>
                    </div>
                    <div className="ContactRight">
                            <h3>Contact Me</h3>
                            <hr/>
                            <i className="fa fa-phone-square" aria-hidden="true"> +1 (657) 252 2512</i>
                            <i className="fa fa-whatsapp" aria-hidden="true"> +1 (657) 252 2512</i>
                            <i className="fa fa-envelope" aria-hidden="true"> pavankumarkoikur@gmail.com</i>
                            <i className="fa fa-map-marker" aria-hidden="true"> Fullerton, California, USA</i>

                    </div>
                
                </div>
            
        </div>
    )
}

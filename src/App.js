import React from 'react';

import './App.css';
import { Layout, Header, Navigation,  Content } from 'react-mdl';
//import { Link } from 'react-router-dom';
import resume from './images/Pavan_Kumar_Resume.pdf'

import Main from './components/Main'



function changeNavBar(e){
  e.preventDefault();

  if(document.getElementById("myNav")){
    let x = document.getElementById("myNav");
    x.id += "display";
  }
  else if(document.getElementById("myNavdisplay")){
    let x = document.getElementById("myNavdisplay");
    x.id = "myNav";
  }

}


function scrollSmoothTo(e,id) {
  e.preventDefault();
 // console.log(e);
 if(document.getElementById("myNavdisplay")){
  let x = document.getElementById("myNavdisplay");
  x.id = "myNav";
}
  var element = document.getElementById(id);
  element.scrollIntoView({
    block: 'start',
    behavior: 'smooth'
  });
}

function App() {
  return (
    <div >
    <Layout fixedHeader>
        <Header title={<a  onClick= {(e)=> scrollSmoothTo(e,'home')} href="#home" id="title"><strong> Pavan Kumar K S</strong></a>} >
            <Navigation  className="myNav" id="myNav">
                
                <a href="#1" id ="iconNav" onClick= {(e)=> changeNavBar(e)}>
                    <i className ="fa fa-bars"></i>
                </a>
                <a onClick= {(e)=> scrollSmoothTo(e,'home')} id ="nav_home" href="#home">Home</a>
                <a onClick= {(e)=> scrollSmoothTo(e,'aboutme')} href="#aboutme">About Me</a>
                <a onClick= {(e)=> scrollSmoothTo(e,'projects')}href="#projects">Projects</a>
                <a href={resume} target= "_blank" rel="noopener noreferrer">Resume</a>
                <a onClick= {(e)=> scrollSmoothTo(e,'contact')} href="#contact">Contact</a>
                
            </Navigation>
            
        </Header>
            
        <Content > 
           <Main/>
        </Content>
    </Layout>
</div>
  
  );
}

export default App;

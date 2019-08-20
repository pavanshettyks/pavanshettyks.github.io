import React from 'react';

import './App.css';
import { Layout, Header, Navigation,  Content } from 'react-mdl';
//import { Link } from 'react-router-dom';

import Main from './components/Main'

function scrollSmoothTo(e,id) {
  e.preventDefault();
 // console.log(e);

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
        <Header title={<a  onClick= {(e)=> scrollSmoothTo(e,'home')} href="#home" id="title"><strong> Pavan Kumar K S</strong></a>}>
            <Navigation>
           
                <a onClick= {(e)=> scrollSmoothTo(e,'aboutme')} href="#aboutme">About Me</a>
                <a onClick= {(e)=> scrollSmoothTo(e,'projects')}href="#projects">Projects</a>
                <a onClick= {(e)=> scrollSmoothTo(e,'skills')}  href="#skills">Skills</a>
                <a onClick= {(e)=> scrollSmoothTo(e,'contact')} href="#contact">Contact Pavan</a>
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

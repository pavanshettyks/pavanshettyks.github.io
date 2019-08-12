import React from 'react';

import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Link } from 'react-router-dom';

import Main from './components/Main'
import profile from './image/profile.jpg'


function App() {
  return (
    <div style={{height: '300px', position: 'relative'}}>
    <Layout fixedHeader>
        <Header title={<span><span style={{ color: '#ddd' }}> </span><strong> Pavan Kumar K S</strong> </span>}>
            <Navigation>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/skills">Skills</Link>
                <Link to="/contact">Contact Pavan</Link>
            </Navigation>
            
        </Header>
            <div>
                <img src= {profile} alt ='avatar' className = "profile_pic" />
            </div>

        <Content > 
           <Main/>
        </Content>
    </Layout>
</div>
  
  );
}

export default App;

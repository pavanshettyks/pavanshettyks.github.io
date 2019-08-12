import React from 'react';

import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import profile from './image/profile.jpg'


function App() {
  return (
    <div style={{height: '300px', position: 'relative'}}>
    <Layout fixedHeader>
        <Header title={<span><span style={{ color: '#ddd' }}> </span><strong>Pavan Kumar K S</strong> </span>}>
            <Navigation>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
            </Navigation>
            
        </Header>
            <div>
                <img src= {profile} alt ='avatar' className = "profile_pic" />
            </div>

        <Content />
    </Layout>
</div>
  
  );
}

export default App;

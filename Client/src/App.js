import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';

import  EdifInfluencerProfile from './components/influencer/Edif-Influencer-Profile';
import Inbox from './components/influencer/Inbox'
import HostRegistration from './components/Host-Registration/Host-Registration';
import UserHome from './components/Host-login/UserHome';
function App() {
  return (
    <Router>
      <div>
  
        <Routes>
         
          <Route path="/" element={<Home />} /> 
          <Route path='/hostRegistration' element={<HostRegistration/>}/>
        <Route path='/influencer' element={<EdifInfluencerProfile/>}/>
        <Route path='/influencer/inbox' element={<Inbox/>}/>
        <Route path='/hostlogin'  element={<UserHome/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
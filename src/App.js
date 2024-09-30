import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Host from './components/Host/Host'
import  EdifInfluencerProfile from './components/influencer/Edif-Influencer-Profile';
import Inbox from './components/influencer/Inbox'
function App() {
  return (
    <Router>
      <div>
  
        <Routes>
         
          <Route path="/" element={<Home />} /> 
          <Route path='/host' element={<Host />}/>
        <Route path='/influencer' element={<EdifInfluencerProfile/>}/>
        <Route path='/influencer/inbox' element={<Inbox/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

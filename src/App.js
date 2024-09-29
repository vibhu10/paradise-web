import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Host from './components/Host/Host'
import Influencer from './components/influencer/Influencer';
function App() {
  return (
    <Router>
      <div>
  
        <Routes>
         
          <Route path="/" element={<Home />} /> 
          <Route path='/host' element={<Host />}/>
          <Route path='/influencer' element={<Influencer/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

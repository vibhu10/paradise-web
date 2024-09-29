import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Host from './components/Host/Host'

function App() {
  return (
    <Router>
      <div>
  
        <Routes>
         
          <Route path="/" element={<Home />} /> 
          <Route path='/host' element={<Host />}/>
        
        </Routes>
      </div>
    </Router>
  );
}

export default App;

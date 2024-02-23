import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/resume/*" element={<Resume />} />
          <Route path="/contact/*" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

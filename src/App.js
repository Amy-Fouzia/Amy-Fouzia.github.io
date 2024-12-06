import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import TextBox from './components/TextBox'

function App() {
  return (
    <Router>
      <Nav></Nav>
      <div className="App">
        <Routes>
          <Route path="" element={<TextBox text='homeText'/>} />
          <Route path="/resume/*" element={<TextBox text='resumeText'/>} />
          <Route path="/projects/*" element={<TextBox text='projectText'/>} />
          <Route path="/hobbies/*" element={<TextBox text='hobbiesText'/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

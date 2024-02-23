import React from 'react';
import '../App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Resume from './Resume';
import TextBox from './TextBox';

function Contact() {
  return (
    <div className="Contact">
      <Routes>
        <Route path="*" element={<Home />} /> 
        <Route path="/resume/*" element={<Resume />} />
        <Route path="/contact/*" element={<TextBox />} />
      </Routes>
    </div>
  );
}

export default Contact;

import React from 'react';
import '../App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import TextBox from './TextBox';

function Resume() {
  return (
    <div className="Resume">
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/resume/*" element={<TextBox />} />
        <Route path="/contact/*" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default Resume;

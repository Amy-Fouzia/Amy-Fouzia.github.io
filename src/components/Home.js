import React from 'react';
import '../App.css';
import { Route, Routes } from 'react-router-dom'; // Remove BrowserRouter import
import Nav from './Nav';
import Resume from './Resume';
import Contact from './Contact';
import TextBox from './TextBox';

function Home() {
  return (
    <div className="Home">
      <Nav />
      <Routes>
        <Route path="*" element={<TextBox />} /> 
        <Route path="/resume/*" element={<Resume />} />
        <Route path="/contact/*" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default Home;

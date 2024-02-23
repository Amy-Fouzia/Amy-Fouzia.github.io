import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import '../App.css';

const Nav = () => {
  return (
    <div className="container">
      <div className="title-container">
        <div className="title">
          Amy F
        </div>
        <Link to="" className="navOval">
          <span>Home</span>
        </Link>
        <Link to="/Resume" className="navOval">
          <span>Resume</span>
        </Link>
        <Link to="/Contact" className="navOval">
          <span>Contact</span>
        </Link>
      </div>
    </div>
  );
};

export default Nav;

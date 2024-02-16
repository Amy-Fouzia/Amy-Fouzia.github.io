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
        <Link to="/page1" className="navOval">
          <span>Tab 1</span>
        </Link>
        <Link to="/page2" className="navOval">
          <span>Tab 2</span>
        </Link>
        <Link to="/page3" className="navOval">
          <span>Tab 3</span>
        </Link>
      </div>
    </div>
  );
};

export default Nav;

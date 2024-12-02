import React from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup } from '@mui/material';
import '../App.css';
import pink from '../images/pink_fish.png'
import blue from '../images/blue_fish.png'

const Nav = () => {
  return (
    <div>
      <div className="nav-container">
        <div className="title">
          Amy Fouzia
        </div>
        <ButtonGroup className="nav" variant="text" aria-label="navigation buttons">
          <Button component={Link} to="/" color="inherit" style={{ fontSize: '100%' }}>Home</Button>
          <Button component={Link} to="/Resume" color="inherit" style={{ fontSize: '100%' }}>Resume</Button>
          <Button component={Link} to="/Contact" color="inherit" style={{ fontSize: '100%' }}>Contact</Button>
          <Button component={Link} to="/Projects" color="inherit" style={{ fontSize: '100%' }}>Projects</Button>
        </ButtonGroup>
        <img src={blue} alt="fish" className="bluefish"/>
        <img src={pink} alt="fish" className="pinkfish"/>
      </div>
    </div>
  );
};

export default Nav;

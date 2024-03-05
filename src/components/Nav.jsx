import React from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup } from '@mui/material';
import '../App.css';

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
        </ButtonGroup>
      </div>
    </div>
  );
};

export default Nav;

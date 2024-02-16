import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Resume from './components/Resume';

function Contact() {
  return (
    <Router>
      <div className="Contact">
        <Nav />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/resume" component={Resume} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default Contact;

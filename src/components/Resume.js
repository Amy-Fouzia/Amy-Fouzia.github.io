import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './nav';
import Home from './Home';
import Contact from './Contact';

function Resume() {
  return (
    <Router>
      <div className="Resume">
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

export default Resume;

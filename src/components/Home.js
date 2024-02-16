import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './nav';
import Resume from './Resume';
import Contact from './Contact';

function Home() {
  return (
    <Router>
      <div className="Home">
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

export default Home;

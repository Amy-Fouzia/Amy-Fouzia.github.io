import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Resume from './components/Resume';
import Contact from './components/Contact';

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
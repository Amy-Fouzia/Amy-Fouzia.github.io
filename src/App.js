import React from 'react';
import Switch from 'react-router-dom';
import Route from 'react-router-dom';
import Router from 'react-router-dom';
import './App.css';
import Nav from './components/nav';
import Home from './components/Home';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="App">
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

export default App;

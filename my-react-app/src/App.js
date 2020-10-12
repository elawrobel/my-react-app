import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from 'react-router-dom';

import './App.css';
import Calculator from './pages/Calculator';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  // JSX
  return (
    <div className="App">
      <Router>
        <ul className="navbar">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <Switch>
          <Route path="/" exact>
            <Calculator />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
      <div className="main"></div>
    </div>

  );
}

export default App;

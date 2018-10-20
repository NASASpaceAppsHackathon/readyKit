import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const Home=() => (
      <div>
        This is the home page
      </div>
    )
    return (
      <Router>
      <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/earthquake">Earthquake</Link>
            </li>
            <li>
              <Link to="/volcano">Volcano Eruption</Link>
            </li>
            <li>
              <Link to="/tornado">Tornado</Link>
            </li>
            <li>
              <Link to="/tsunami">Tsunami</Link>
            </li>
          </ul>
          <hr />
          <Route exact path="/" component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;

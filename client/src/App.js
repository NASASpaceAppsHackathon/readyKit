import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './screens/home/home'
import SideBar from './components/SideBar/SideBar'
import Earthquake from './screens/earthquake/earthquake'
import VolcanicEruption from './screens/volcanicEruption/volcanicEruption'
import Tornado from './screens/tornado/tornado'
import Tsunami from './screens/tsunami/tsunami'
import Profile from './screens/profile/profile'
import logo from './assets/logo.png'
import kit from './assets/kit.png'

class App extends Component {
  render() {
    return (
      <div id="main">
        <SideBar />
        <div id="logo">
          <img id="title" alt={logo} src={logo} />
          <img id="logoImage" alt={kit} src={kit} />
        </div>
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/earthquake" component={Earthquake} />
            <Route
              exact
              path="/volcanicEruption"
              component={VolcanicEruption}
            />
            <Route exact path="/tornado" component={Tornado} />
            <Route exact path="/tsunami" component={Tsunami} />
            <Route exact path="/profile" component={Profile} />
          </div>
        </Router>
      </div>
    )
  }
}

export default App

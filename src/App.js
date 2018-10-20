import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css'
import SideBar from './components/SideBar/SideBar'
import Earthquake from './screens/earthquake/earthquake'
import VolcanicEruption from './screens/volcanicEruption/volcanicEruption'
import Tornado from './screens/tornado/tornado'
import Tsunami from './screens/tsunami/tsunami'

class App extends Component {
  render() {
    const Home = () => <div>This is the home page</div>
    return (
      <div id="main">
        <SideBar></SideBar>

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
                <Link to="/volcanicEruption">Volcanic Eruption</Link>
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
            <Route exact path="/earthquake" component={Earthquake} />
            <Route exact path="/volcanicEruption" component={VolcanicEruption} />
            <Route exact path="/tornado" component={Tornado} />
            <Route exact path="/tsunami" component={Tsunami} />
          </div>
        </Router>
      </div>
    )
  }
}

export default App

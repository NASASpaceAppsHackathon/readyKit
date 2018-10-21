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
import Contacts from './screens/contacts/contacts'
import Test from './components/test'
import Checklist from './components/checklist'
import AddContact from './screens/contacts/addcontact'

class App extends Component {
  render() {
    return (
      <div id="main">
        <Router>
          <div>
            <Link to="./" id="logo">
              <img id="title" alt={logo} src={logo} />
              <img id="logoImage" alt={kit} src={kit} />
            </Link>
            <SideBar />
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
            <Route exact path="/contacts" component={Contacts} />
            <Route exact path="/new" component={AddContact} />
            <Route exact path="/earthquakeChecklist"
              render={()=><Checklist title="My Checklist" list_id="earthquake"/>}
            />
            <Route exact path="/volcanoChecklist"
              render={()=><Checklist title="My Checklist" list_id="volcano"/>}
            />
            <Route exact path="/tornadoChecklist"
              render={()=><Checklist title="My Checklist" list_id="tornado"/>}
            />
            <Route exact path="/tsunamiChecklist"
              render={()=><Checklist title="My Checklist" list_id="tsunami"/>}
            />
            <Route exact path="/test" component={Test} />
          </div>
        </Router>
      </div>
    )
  }
}

export default App

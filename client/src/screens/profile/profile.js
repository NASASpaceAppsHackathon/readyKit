import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Pic from '../../assets/profile.png'
import style from './profile.module.css'
import ProfileBackground from '../../assets/profileBackground.webp'

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Jane Doe',
      email: 'jane.doe@gmail.com',
      password: '*******',
      country: 'Canada',
      city: 'Waterloo',
      address: '121 Street West',
      postalCode: 'M1C 2N2',
      checkLists: ['Earthquake', 'Volcano', 'Tsunami', 'Tornado'],
      contacts: ['Mom', 'Dad', 'Sarah', 'John']
    }
  }

  render() {
    return (
      <div className={style.wrap}>
        <div className={style.center}>
          <img
            className={style.profileBackground}
            src={ProfileBackground}
            alt=""
          />
          <img className={style.profileImage} src={Pic} alt="" />
          <div>Name: {this.state.name}</div>
          <div>Email: {this.state.email}</div>
          <div>Password: {this.state.password}</div>
          <div>
            Address: {this.state.address},{this.state.city},{' '}
            {this.state.country}
          </div>
          <div>Postal Code: {this.state.postalCode}</div>
          <div className={style.list}>
            Checklists ({this.state.checkLists.length})
            <Link to="/earthquakeChecklist" className={style.checkLists}>
              {this.state.checkLists[0]}
            </Link>
            <Link to="/volcanicEruptionChecklist" className={style.checkLists}>
              {this.state.checkLists[1]}
            </Link>
            <Link to="/tsunamiChecklist" className={style.checkLists}>
              {this.state.checkLists[2]}
            </Link>
            <Link to="/tornadoChecklist" className={style.checkLists}>
              {this.state.checkLists[3]}
            </Link>
          </div>
          <div className={style.list}>
            Contacts ({this.state.contacts.length})
            <div className={style.checkLists}>{this.state.contacts[0]}</div>
            <div className={style.checkLists}>{this.state.contacts[1]}</div>
            <div className={style.checkLists}>{this.state.contacts[2]}</div>
            <div className={style.checkLists}>{this.state.contacts[3]}</div>
          </div>
        </div>
      </div>
    )
  }
}
export default Profile

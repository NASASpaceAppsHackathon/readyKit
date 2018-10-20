import React, { Component } from 'react'
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
      checkLists: ['Earthquake', 'Volcano', 'Tsunami', 'Tornado']
    }
  }

  render() {
    const Header = () => (
      <div>
        <div>
          <img
            className={style.profileBackground}
            src={ProfileBackground}
            alt=""
          />
          <img className={style.profileImage} src={Pic} alt="" />
        </div>
        <div>{this.state.name}</div>
        <div>{this.state.email}</div>
      </div>
    )
    return (
      <div className={style.wrap}>
        <div className={style.center}>
          <Header />
          <div>{this.state.password}</div>
          <div>
            {this.state.address},{this.state.city}, {this.state.country}
          </div>

          <div>{this.state.postalcode}</div>
          <div className={style.list}>
            Checklists
            <div className={style.checkLists}>{this.state.checkLists[0]}</div>
            <div className={style.checkLists}>{this.state.checkLists[1]}</div>
            <div className={style.checkLists}>{this.state.checkLists[2]}</div>
            <div className={style.checkLists}>{this.state.checkLists[3]}</div>
          </div>
        </div>
      </div>
    )
  }
}
export default Profile

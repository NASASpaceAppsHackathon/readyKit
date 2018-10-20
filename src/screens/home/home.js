import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import style from './home.module.css'

class Home extends Component {
  render() {
    return (
      <div>
        <div className={style.title}>ReadyKit</div>
        <div className={style.categories}>
          <div className={style.padding}>
            <Link to="/earthquake">
              <div className={style.earthquakeImage}>Earthquake</div>
            </Link>
          </div>
          <div className={style.padding}>
            <Link to="/volcanicEruption">
              <div className={style.volcanoImage}>Volcanic Eruption</div>
            </Link>
          </div>
          <div className={style.padding}>
            <Link to="/tornado">
              <div className={style.tornadoImage}>tornado</div>
            </Link>
          </div>
          <div className={style.padding}>
            <Link to="/tsunami">
              <div className={style.tsunamiImage}>tsunami</div>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Home

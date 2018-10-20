import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import style from './home.module.css'

class Home extends Component {
  render() {
    return (
      <div>
        <div className={style.categories}>
          <div className={style.padding}>
            <Link to="/earthquake" className={style.categoryTitle}>
              <div className={style.earthquakeImage}>
                <div className={style.categoryTitle}>EARTHQUAKE</div>
              </div>
            </Link>
          </div>
          <div className={style.padding}>
            <Link to="/volcanicEruption" className={style.categoryTitle}>
              <div className={style.volcanoImage}>
                <div className={style.categoryTitle}>VOLCANO</div>
              </div>
            </Link>
          </div>
          <div className={style.padding}>
            <Link to="/tornado" className={style.categoryTitle}>
              <div className={style.tornadoImage}>
                <div className={style.categoryTitle}>TORNADO</div>
              </div>
            </Link>
          </div>
          <div className={style.padding}>
            <Link to="/tsunami" className={style.categoryTitle}>
              <div className={style.tsunamiImage}>
                <div className={style.categoryTitle}>TSUNAMI</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Home

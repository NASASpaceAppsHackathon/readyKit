import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import style from './home.module.css'

class Home extends Component {
  render() {
    const styles = {
      flex: 1,
      height: '200px',
      width: '250px',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      borderWidth: '10px',
      borderColor: 'slategray',
      borderStyle: 'solid',
      borderRadius: '30px'
    }
    return (
      <div className={style.wrap}>
        <div className={style.categories}>
          <Link to="/earthquake" className={style.no}>
            <div className={style.earthquakeImage} style={styles}>
              <div className={style.categoryTitle}>EARTHQUAKES</div>
            </div>
          </Link>
          <Link to="/volcanicEruption" className={style.no}>
            <div className={style.volcanoImage} style={styles}>
              <div className={style.categoryTitle}>VOLCANOS</div>
            </div>
          </Link>
          <Link to="/tornado" className={style.no}>
            <div className={style.tornadoImage} style={styles}>
              <div className={style.categoryTitle}>TORNADOS</div>
            </div>
          </Link>
          <Link to="/tsunami" className={style.no}>
            <div className={style.tsunamiImage} style={styles}>
              <div className={style.categoryTitle}>TSUNAMIS</div>
            </div>
          </Link>
          <Link to="/fires" className={style.no}>
            <div className={style.firesImage} style={styles}>
              <div className={style.categoryTitle}>FIRES</div>
            </div>
          </Link>
          <Link to="/industrialAccidents" className={style.no}>
            <div className={style.industrialAccidentsImage} style={styles}>
              <div className={style.categoryTitle}>INDUSTRIAL ACCIDENTS</div>
            </div>
          </Link>
          <Link to="/landslides" className={style.no}>
            <div className={style.landslidesImage} style={styles}>
              <div className={style.categoryTitle}>LANDSLIDES</div>
            </div>
          </Link>
          <Link to="/oilSpills" className={style.no}>
            <div className={style.oilSpillsImage} style={styles}>
              <div className={style.categoryTitle}>OIL SPILLS</div>
            </div>
          </Link>
          <Link to="/winterWeather" className={style.no}>
            <div className={style.winterWeatherImage} style={styles}>
              <div className={style.categoryTitle}>WINTER WEATHER</div>
            </div>
          </Link>
        </div>
      </div>
    )
  }
}

export default Home

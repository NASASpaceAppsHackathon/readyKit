import React, { Component } from 'react'
import { Description } from '../../components/description'
import Checklist from '../../components/checklist'
import { Link } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import style from '../../components/description.module.css'
import img1 from '../../assets/tsunami1.jpg'

library.add(faArrowLeft)

const description =
  'Tsunami is a series of large waves of extremely long wavelength and period usually generated by a violent, impulsive undersea disturbance or activity near the coast or in the ocean. When a sudden displacement of a large volume of water occurs, or if the sea floor is suddenly raised or dropped by an earthquake, big tsunami waves can be formed.  The waves travel out of the area of origin and can be extremely dangerous and damaging when they reach the shore. '
const description2 =
  'When there are tsunami warnings in your area, it means a tsunami may have generated in your area and the danger may be close. Be calm and do not panic. '

class Tsunami extends Component {
  render() {
    return (
      <div style={{ display: 'flex' }}>
        <div className={style.container}>
          <Link
            to="/"
            className="button"
            style={{ position: 'absolute', top: '160px' }}
          >
            <FontAwesomeIcon
              style={{ marginTop: '10px' }}
              icon="arrow-left"
              size="2x"
              color="#00134d"
            />
          </Link>
          <h1 className={style.title}>TSUNAMI</h1>

          <div className={style.descript}>
            <p>{description}</p>
          </div>
          <img alt="" src={img1} className={style.img} />
          <div className={style.descript}>
            <h1> HOW TO PREPARE</h1>
            <p>{description2}</p>
            <p> Here is what we suggest:</p>
          </div>
        </div>
        <Checklist title="My Checklist" list_id="tsunami" />
      </div>
    )
  }
}

export default Tsunami

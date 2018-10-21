import React, { Component } from 'react'
import { Description } from '../../components/description'
import Checklist from '../../components/checklist'
import { Link } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import style from '../../components/description.module.css'
import img1 from '../../assets/tornado1.jpg'

library.add(faArrowLeft)

const description =
  'Tornadoes are funnels of rapidly spinning air. Their winds may top 250 miles (400 kilometers) an hour and can clear a pathway a mile (1.6 kilometers) wide and 50 miles (80 kilometers) long.Twisters are born in thunderstorms and are often accompanied by hail. Giant, persistent thunderstorms called supercells spawn the most destructive tornadoes. These violent storms occur around the world, but the United States is a major hotspot with about a thousand tornadoes every year.'
const description2 =
  'When there are thunderstorms in your area, turn on your radio or TV to get the latest emergency information from local authorities. Listen for announcements of a tornado watch or tornado warning.'
class Tornado extends Component {
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
              style={{ marginTop: '-55px' }}
              icon="arrow-left"
              size="2x"
              color="#00134d"
            />
          </Link>
          <h1 className={style.title}>TORNADOS</h1>

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
        <Checklist title="My Checklist" list_id="tornado" />
      </div>
    )
  }
}

export default Tornado

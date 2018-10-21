import React, { Component } from 'react'
import { Description } from '../../components/description'
import Checklist from '../../components/checklist'
import img1 from '../../assets/volcano-1.jpg'
import img2 from '../../assets/volcano-2.jpg'
import style from '../../components/description.module.css'
import { Link } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

library.add(faArrowLeft)

const description =
  'A volcano is an opening on the surface of a planet or moon that allows material warmer than its surroundings to escape from its interior. When this material escapes, it causes an eruption. An eruption can be explosive, sending material high into the sky. Or it can be calmer, with gentle flows of material.'
const description2 =
  'These volcanic areas usually form mountains built from the many layers of rock, ash or other material that collect around them. Volcanoes can be active, dormant, or extinct. Active volcanoes are volcanoes that have had recent eruptions or are expected to have eruptions in the near future. Dormant volcanoes no longer produce eruptions, but might again sometime in the future. Extinct volcanoes will likely never erupt again.'
const description3 =
  'Be prepared either to shelter or to evacuate. Develop an evacuation plan and a sheltering plan for yourself, your family, and others in your household. Review the plans and make sure that everyone understands them. '
class VolcanicEruption extends Component {
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
          <h1 className={style.title}>VOLCANOS</h1>
          <div className={style.descript}>
            <p>{description}</p>
          </div>
          <img alt="" src={img1} className={style.img} />
          <div className={style.descript}>
            <p>{description2}</p>
          </div>
          <img alt="" src={img2} className={style.img} />
          <div className={style.descript}>
            <p />
          </div>
          <img alt="" className={style.img} />
          <div className={style.descript}>
            <h1> HOW TO PREPARE</h1>
            <p>{description3}</p>
            <p> Here is what we suggest:</p>
            <ul>
              <li>Flashlight and extra batteries</li>
              <li>First aid kit and manual</li>
              <li>Emergency Food and Water</li>
              <li>Manual (nonelectric) can opener</li>
              <li>Essential medicines</li>
              <li>Sturdy shoes</li>
              <li>Breathing protection (masks)</li>
              <li>Eye protection (goggles)</li>
              <li>Battery-powered Radio</li>
            </ul>
          </div>
        </div>
        <Checklist title="My Checklist" list_id="volcano" />
      </div>
    )
  }
}

export default VolcanicEruption

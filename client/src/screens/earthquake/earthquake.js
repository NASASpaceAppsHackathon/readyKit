import React, { Component } from 'react'
import { Description } from '../../components/description'
import Checklist from '../../components/checklist'
import img1 from '../../assets/earthquake-1.jpg'
import img2 from '../../assets/earthquake-2.jpg'
import style from '../../components/description.module.css'
import { Link } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

library.add(faArrowLeft)

const description =
  'An earthquake is an intense shaking of Earth’s surface. The shaking is caused by movements in Earth’s outermost layer.'
const description2 =
  'Although the Earth looks like a pretty solid place from the surface, it’s actually extremely active just below the surface. The Earth is made of four basic layers: a solid crust, a hot, nearly solid mantle, a liquid outer core and a solid inner core.The solid crust and top, stiff layer of the mantle make up a region called the lithosphere. The lithosphere isn’t a continuous piece that wraps around the whole Earth like an eggshell. It’s actually made up of giant puzzle pieces called tectonic plates. Tectonic plates are constantly shifting as they drift around on the viscous, or slowly flowing, mantle layer below.'
const description3 =
  'This non-stop movement causes stress on Earth’s crust. When the stresses get too large, it leads to cracks called faults. When tectonic plates move, it also causes movements at the faults. An earthquake is the sudden movement of Earth’s crust at a fault line.'
const description4 =
  'If an earthquake happens, protect yourself right away. Drop, Cover, then Hold On!'

class Earthquake extends Component {
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
          <h1 className={style.title}>EARTHQUAKES</h1>
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
            <p>{description3}</p>
          </div>
          <div className={style.descript}>
            <h1> HOW TO PREPARE</h1>
            <p>{description4}</p>
            <p> Here is what we suggest:</p>
            <ul>
              <li>
                Non-perishable food such as dehydrated food, powdered milk,
                canned juices, dried cereals, fruits and non-salted nuts
              </li>
              <li>Flashlights and spare batteries</li>
              <li>
                Portable, battery-powered radio or television and spare
                batteries
              </li>
              <li>First aid kit and manual</li>
              <li>Sturdy shoes</li>
              <li>Fire extinguishers</li>
            </ul>
          </div>
        </div>
        <Checklist title="My Checklist" list_id="earthquake" />
      </div>
    )
  }
}

export default Earthquake

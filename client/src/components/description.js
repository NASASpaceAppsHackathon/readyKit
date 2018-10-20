import React from 'react';
import style from './description.module.css';
import {Link} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

library.add(faArrowLeft);

export const Description= (props) => (
            
            <div className={style.container}>
            <Link to={props.link} className="button" style={{float: 'left'}}> <FontAwesomeIcon icon="arrow-left" size= '2x' color='#00134d'/></Link>
                <h1 style={{textAlign: 'center'}}>{props.title}</h1>
                <div className={style.descript} >
                    <p>{props.description}</p>
                </div>
                <div className={style.descript} >
                    <p>{props.description2}</p>
                </div>
                <div className={style.descript} >
                    <p>{props.description3}</p>
                </div>
            </div>
        )

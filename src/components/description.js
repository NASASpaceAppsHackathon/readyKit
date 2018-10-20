import React, { Component } from 'react';
import style from './description.module.css';
import {Link} from 'react-router-dom';

export const Description= (props) => (
            
            <div className={style.container}>
            <Link to={props.link} className="button" style={{float: 'left'}}> Back</Link>
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
